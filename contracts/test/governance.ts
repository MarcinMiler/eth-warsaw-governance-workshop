import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { expect } from 'chai'
import { ethers } from 'hardhat'
import * as F from 'fp-ts/lib/function'

import { GovernanceToken, Governance } from '../typechain'
import { returnArgsFromEvent, mineBlocks } from './utils'

export enum ProposalState {
  Pending,
  Active,
  Succeeded,
  Deafeated,
  Expired,
}

describe('Governance', () => {
  let owner: SignerWithAddress
  let governance: Governance
  let governanceToken: GovernanceToken

  beforeEach(async () => {
    ;[owner] = await ethers.getSigners()
    const GovernanceToken = await ethers.getContractFactory('GovernanceToken')
    governanceToken = await GovernanceToken.deploy()
    await governanceToken.deployed()

    const Governance = await ethers.getContractFactory('Governance')
    governance = await Governance.deploy(governanceToken.address)
    await governance.deployed()

    await governanceToken.mintFreeTokens()
  })

  const createProposal = async (proposal: { name: string }) => {
    const txn = await governance.createProposal(proposal.name)
    const receipt = await txn.wait()

    return returnArgsFromEvent('ProposalCreated')(receipt)
  }

  const vote = async (proposalId: number, amount: number, support: boolean) => {
    const txn = await governance.vote(proposalId, amount, support)
    const receipt = await txn.wait()

    return returnArgsFromEvent('Voted')(receipt)
  }

  const getProposal = async (proposalId: BigNumberish) =>
    F.pipe(
      await governance.getProposal(proposalId),
      ([id, name, forVotes, againstVotes, startBlock, endBlock, state]) => ({
        id,
        name,
        forVotes,
        againstVotes,
        startBlock,
        endBlock,
        state,
      })
    )

  it('should create new proposal', async () => {
    const proposal = {
      name: 'New proposal',
    }

    await expect(governance.createProposal(proposal.name))
      .to.emit(governance, 'ProposalCreated')
      .withArgs(BigNumber.from(1), proposal.name)
  })

  it('should return proposal by id', async () => {
    const expectedProposal = {
      id: BigNumber.from(1),
      name: 'New proposal',
      forVotes: BigNumber.from(0),
      againstVotes: BigNumber.from(0),
      state: 0,
    }

    const [proposalId] = await createProposal({ name: expectedProposal.name })

    const proposal = await getProposal(proposalId)
    const proposalCount = await governance.getProposalCount()
    const blockNumber = await ethers.provider.getBlockNumber()

    const startBlock = BigNumber.from(blockNumber + 1)
    const endBlock = BigNumber.from(blockNumber + 101)

    expect(proposalCount).to.eq(BigNumber.from(2))

    expect(proposal).to.deep.eq({
      ...expectedProposal,
      startBlock,
      endBlock,
    })
  })

  it('should vote for proposal', async () => {
    const proposalToCreate = {
      name: 'Proposal 1',
    }

    const [proposalId] = await createProposal(proposalToCreate)

    const voteEvent = await vote(proposalId, 100, true)

    expect(voteEvent).to.deep.eq([
      proposalId,
      owner.address,
      BigNumber.from(100),
      true,
    ])

    const proposal = await getProposal(proposalId)

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.forVotes).to.eq(BigNumber.from(100))
    expect(proposal.againstVotes).to.eq(BigNumber.from(0))
  })

  it('should vote against proposal', async () => {
    const proposalToCreate = {
      name: 'Proposal 1',
    }

    const [proposalId] = await createProposal(proposalToCreate)

    const voteEvent = await vote(proposalId, 100, false)
    const proposal = await getProposal(proposalId)

    expect(voteEvent).to.deep.eq([
      proposalId,
      owner.address,
      BigNumber.from(100),
      false,
    ])

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.forVotes).to.eq(BigNumber.from(0))
    expect(proposal.againstVotes).to.eq(BigNumber.from(100))
  })

  it('should vote with custom amount of owned tokens', async () => {
    const proposalToCreate = {
      name: 'Proposal 1',
    }

    const [proposalId] = await createProposal(proposalToCreate)

    const voteEvent = await vote(proposalId, 50, true)
    const proposal = await governance.getProposal(proposalId)

    expect(voteEvent).to.deep.eq([
      proposalId,
      owner.address,
      BigNumber.from(50),
      true,
    ])

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.forVotes).to.eq(BigNumber.from(50))
    expect(proposal.againstVotes).to.eq(BigNumber.from(0))
  })

  it('should revert when voted twice for one proposal', async () => {
    const proposalToCreate = {
      name: 'Proposal 1',
    }

    const [proposalId] = await createProposal(proposalToCreate)

    const txn = await governance.vote(proposalId, 100, true)
    await txn.wait()

    await expect(governance.vote(proposalId, 100, true)).to.be.revertedWith(
      'Already voted'
    )
  })

  it('should return Active state for proposal when block number is between start and end', async () => {
    const [proposalId] = await createProposal({ name: 'name' })

    await mineBlocks(1)()

    const proposal = await getProposal(proposalId)

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.state).to.eq(ProposalState.Active)
  })

  it(`should return Succeeded state for proposal when:
        * proposal reaches quorum 
        * for votes > against votes
        * proposal voting period expires
  `, async () => {
    const [proposalId] = await createProposal({ name: 'name' })
    await vote(proposalId, 100, true)

    await mineBlocks(101)()

    const proposal = await getProposal(proposalId)

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.state).to.eq(ProposalState.Succeeded)
  })

  it(`should return Deafeated state for proposal when:
        * proposal reaches quorum 
        * for votes < against votes
        * proposal voting period expires
  `, async () => {
    const [proposalId] = await createProposal({ name: 'name' })
    await vote(proposalId, 100, false)

    await mineBlocks(101)()

    const proposal = await getProposal(proposalId)

    expect(proposal.id).to.eq(proposalId)
    expect(proposal.state).to.eq(ProposalState.Deafeated)
  })
})
