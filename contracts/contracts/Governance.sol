//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
pragma abicoder v2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract Governance {
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

  }

  function vote(
    uint256 proposalId,
    uint256 amount,
    bool support
  ) public {

  }

  function proposalState(uint256 proposalId)
    public
    view
    returns (ProposalState)
  {

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

  }

  function getProposalCount() public view returns (uint256) {
    return proposalCount;
  }

  function quorumVotes() public pure returns (uint256) {
    return 10;
  }

  function votingPeriod() public pure returns (uint256) {
    return 101;
  }
}
