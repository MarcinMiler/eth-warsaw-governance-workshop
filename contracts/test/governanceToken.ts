import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

import { GovernanceToken } from '../typechain'

describe('Governance Token', () => {
  let owner: SignerWithAddress
  let governanceToken: GovernanceToken

  beforeEach(async () => {
    ;[owner] = await ethers.getSigners()
    const GovernanceToken = await ethers.getContractFactory('GovernanceToken')
    governanceToken = await GovernanceToken.deploy()
    await governanceToken.deployed()
  })

  it('should mint free tokens', async () => {
    await governanceToken.mintFreeTokens()

    const ownerBalance = await governanceToken.balanceOf(owner.address)

    expect(ethers.utils.formatEther(ownerBalance)).to.eq('100.0')
  })
})
