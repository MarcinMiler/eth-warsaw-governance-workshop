//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract GovernanceSolved {
  using SafeERC20 for IERC20;

  struct Voter {
    bool voted;
    bool support;
    uint256 votes;
  }

  struct Proposal {
    uint256 id;
    string name;
    uint256 forVotes;
    uint256 againstVotes;
    uint256 startBlock;
    uint256 endBlock;
    mapping(address => Voter) voters;
  }

  enum ProposalState {
    Pending,
    Active,
    Succeeded,
    Deafeated
  }

  address private owner;
  IERC20 private token;

  uint256 public proposalCount = 1;
  mapping(uint256 => Proposal) public proposals;

  event ProposalCreated(uint256 indexed proposalId, string name);
  event Voted(
    uint256 indexed proposalId,
    address indexed voter,
    uint256 amount,
    bool support
  );

  constructor(IERC20 _token) {
    owner = msg.sender;
    token = _token;
  }

  function createProposal(string memory name)
    public
    returns (uint256 proposalId)
  {
    uint256 startBlock = block.number + 1;
    uint256 endBlock = block.number + votingPeriod();

    proposalId = proposalCount++;

    Proposal storage proposal = proposals[proposalId];
    proposal.id = proposalId;
    proposal.name = name;
    proposal.forVotes = 0;
    proposal.againstVotes = 0;
    proposal.startBlock = startBlock;
    proposal.endBlock = endBlock;

    emit ProposalCreated(proposalId, name);

    return proposalId;
  }

  function proposalState(uint256 proposalId)
    public
    view
    returns (ProposalState)
  {
    require(
      proposalCount >= proposalId && proposalId >= 1,
      'Invalid proposalId'
    );

    Proposal storage proposal = proposals[proposalId];

    if (block.number <= proposal.startBlock) {
      return ProposalState.Pending;
    } else if (block.number <= proposal.endBlock) {
      return ProposalState.Active;
    } else if (
      proposal.forVotes >= proposal.againstVotes ||
      proposal.forVotes > quorumVotes()
    ) {
      return ProposalState.Succeeded;
    } else {
      return ProposalState.Deafeated;
    }
  }

  function getProposal(uint256 proposalId)
    public
    view
    returns (
      uint256 id,
      string memory name,
      uint256 forVotes,
      uint256 againstVotes,
      uint256 startBlock,
      uint256 endBlock,
      ProposalState state
    )
  {
    Proposal storage proposal = proposals[proposalId];
    return (
      proposal.id,
      proposal.name,
      proposal.forVotes,
      proposal.againstVotes,
      proposal.startBlock,
      proposal.endBlock,
      proposalState(proposalId)
    );
  }

  function getProposalCount() public view returns (uint256) {
    return proposalCount;
  }

  function vote(
    uint256 proposalId,
    uint256 amount,
    bool support
  ) public {
    Proposal storage proposal = proposals[proposalId];
    Voter storage voter = proposal.voters[msg.sender];

    require(!voter.voted, 'Already voted');

    uint256 tokenBalance = token.balanceOf(msg.sender) / (10**18);

    require(tokenBalance >= amount, 'Insufficient balance');

    if (support) {
      proposal.forVotes += amount;
    } else {
      proposal.againstVotes += amount;
    }

    voter.voted = true;
    voter.support = support;
    voter.votes = amount;

    emit Voted(proposalId, msg.sender, amount, support);
  }

  function quorumVotes() public pure returns (uint256) {
    return 10;
  }

  function votingPeriod() public pure returns (uint256) {
    return 101;
  }
}
