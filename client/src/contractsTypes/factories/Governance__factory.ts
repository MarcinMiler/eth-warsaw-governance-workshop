/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governance, GovernanceInterface } from "../Governance";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "createProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "enum Governance.ProposalState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "proposalState",
    outputs: [
      {
        internalType: "enum Governance.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quorumVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016002553480156200001657600080fd5b50604051620012ac380380620012ac83398181016040528101906200003c9190620000db565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000169565b600081519050620000d5816200014f565b92915050565b600060208284031215620000ee57600080fd5b6000620000fe84828501620000c4565b91505092915050565b600062000114826200012f565b9050919050565b6000620001288262000107565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200015a816200011b565b81146200016657600080fd5b50565b61113380620001796000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636a18ff7a116100665780636a18ff7a14610139578063c08cc02d14610155578063c7f758a814610173578063d26331d4146101a9578063da35c664146101d957610093565b8063013cf08b1461009857806302a251a3146100cd57806324bc1a64146100eb57806349c2a1a614610109575b600080fd5b6100b260048036038101906100ad9190610997565b6101f7565b6040516100c496959493929190610c12565b60405180910390f35b6100d56102bb565b6040516100e29190610bce565b60405180910390f35b6100f36102c4565b6040516101009190610bce565b60405180910390f35b610123600480360381019061011e9190610956565b6102cd565b6040516101309190610bce565b60405180910390f35b610153600480360381019061014e91906109e9565b6103ae565b005b61015d61063e565b60405161016a9190610bce565b60405180910390f35b61018d60048036038101906101889190610997565b610648565b6040516101a09796959493929190610c7a565b60405180910390f35b6101c360048036038101906101be9190610997565b610736565b6040516101d09190610b31565b60405180910390f35b6101e1610806565b6040516101ee9190610bce565b60405180910390f35b600360205280600052604060002060009150905080600001549080600101805461022090610e98565b80601f016020809104026020016040519081016040528092919081815260200182805461024c90610e98565b80156102995780601f1061026e57610100808354040283529160200191610299565b820191906000526020600020905b81548152906001019060200180831161027c57829003601f168201915b5050505050908060020154908060030154908060040154908060050154905086565b60006065905090565b6000600a905090565b6000806001436102dd9190610d62565b905060006102e96102bb565b436102f49190610d62565b90506002600081548092919061030990610efb565b91905055925060006003600085815260200190815260200160002090508381600001819055508481600101908051906020019061034792919061080c565b506000816002018190555060008160030181905550828160040181905550818160050181905550837f9c770c289ab5bf7e57cb1d23c8ceae993aea46eb64847072fd3d78ca60d3e4328660405161039e9190610b4c565b60405180910390a2505050919050565b600060036000858152602001908152602001600020905060008160060160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000160009054906101000a900460ff161561045c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045390610b8e565b60405180910390fd5b6000670de0b6b3a7640000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016104c29190610b16565b60206040518083038186803b1580156104da57600080fd5b505afa1580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051291906109c0565b61051c9190610db8565b905084811015610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055890610b6e565b60405180910390fd5b8315610587578483600201600082825461057b9190610d62565b925050819055506105a3565b8483600301600082825461059b9190610d62565b925050819055505b60018260000160006101000a81548160ff021916908315150217905550838260000160016101000a81548160ff0219169083151502179055508482600101819055503373ffffffffffffffffffffffffffffffffffffffff16867fb7086a9dd618ffa688aa9500720dfe31d3b288daba445664cecceaed4a1562c3878760405161062e929190610be9565b60405180910390a3505050505050565b6000600254905090565b60006060600080600080600080600360008a8152602001908152602001600020905080600001548160010182600201548360030154846004015485600501546106908f610736565b85805461069c90610e98565b80601f01602080910402602001604051908101604052809291908181526020018280546106c890610e98565b80156107155780601f106106ea57610100808354040283529160200191610715565b820191906000526020600020905b8154815290600101906020018083116106f857829003601f168201915b50505050509550975097509750975097509750975050919395979092949650565b6000816002541015801561074b575060018210155b61078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190610bae565b60405180910390fd5b6000600360008481526020019081526020016000209050806004015443116107b6576000915050610801565b806005015443116107cb576001915050610801565b806003015481600201541015806107ec57506107e56102c4565b8160020154115b156107fb576002915050610801565b60039150505b919050565b60025481565b82805461081890610e98565b90600052602060002090601f01602090048101928261083a5760008555610881565b82601f1061085357805160ff1916838001178555610881565b82800160010185558215610881579182015b82811115610880578251825591602001919060010190610865565b5b50905061088e9190610892565b5090565b5b808211156108ab576000816000905550600101610893565b5090565b60006108c26108bd84610d15565b610cf0565b9050828152602081018484840111156108da57600080fd5b6108e5848285610e56565b509392505050565b6000813590506108fc816110cf565b92915050565b600082601f83011261091357600080fd5b81356109238482602086016108af565b91505092915050565b60008135905061093b816110e6565b92915050565b600081519050610950816110e6565b92915050565b60006020828403121561096857600080fd5b600082013567ffffffffffffffff81111561098257600080fd5b61098e84828501610902565b91505092915050565b6000602082840312156109a957600080fd5b60006109b78482850161092c565b91505092915050565b6000602082840312156109d257600080fd5b60006109e084828501610941565b91505092915050565b6000806000606084860312156109fe57600080fd5b6000610a0c8682870161092c565b9350506020610a1d8682870161092c565b9250506040610a2e868287016108ed565b9150509250925092565b610a4181610de9565b82525050565b610a5081610dfb565b82525050565b610a5f81610e44565b82525050565b6000610a7082610d46565b610a7a8185610d51565b9350610a8a818560208601610e65565b610a938161102f565b840191505092915050565b6000610aab601483610d51565b9150610ab682611040565b602082019050919050565b6000610ace600d83610d51565b9150610ad982611069565b602082019050919050565b6000610af1601283610d51565b9150610afc82611092565b602082019050919050565b610b1081610e3a565b82525050565b6000602082019050610b2b6000830184610a38565b92915050565b6000602082019050610b466000830184610a56565b92915050565b60006020820190508181036000830152610b668184610a65565b905092915050565b60006020820190508181036000830152610b8781610a9e565b9050919050565b60006020820190508181036000830152610ba781610ac1565b9050919050565b60006020820190508181036000830152610bc781610ae4565b9050919050565b6000602082019050610be36000830184610b07565b92915050565b6000604082019050610bfe6000830185610b07565b610c0b6020830184610a47565b9392505050565b600060c082019050610c276000830189610b07565b8181036020830152610c398188610a65565b9050610c486040830187610b07565b610c556060830186610b07565b610c626080830185610b07565b610c6f60a0830184610b07565b979650505050505050565b600060e082019050610c8f600083018a610b07565b8181036020830152610ca18189610a65565b9050610cb06040830188610b07565b610cbd6060830187610b07565b610cca6080830186610b07565b610cd760a0830185610b07565b610ce460c0830184610a56565b98975050505050505050565b6000610cfa610d0b565b9050610d068282610eca565b919050565b6000604051905090565b600067ffffffffffffffff821115610d3057610d2f611000565b5b610d398261102f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610d6d82610e3a565b9150610d7883610e3a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dad57610dac610f44565b5b828201905092915050565b6000610dc382610e3a565b9150610dce83610e3a565b925082610dde57610ddd610f73565b5b828204905092915050565b6000610df482610e1a565b9050919050565b60008115159050919050565b6000819050610e15826110bb565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610e4f82610e07565b9050919050565b82818337600083830152505050565b60005b83811015610e83578082015181840152602081019050610e68565b83811115610e92576000848401525b50505050565b60006002820490506001821680610eb057607f821691505b60208210811415610ec457610ec3610fd1565b5b50919050565b610ed38261102f565b810181811067ffffffffffffffff82111715610ef257610ef1611000565b5b80604052505050565b6000610f0682610e3a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f3957610f38610f44565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b7f416c726561647920766f74656400000000000000000000000000000000000000600082015250565b7f496e76616c69642070726f706f73616c49640000000000000000000000000000600082015250565b600481106110cc576110cb610fa2565b5b50565b6110d881610dfb565b81146110e357600080fd5b50565b6110ef81610e3a565b81146110fa57600080fd5b5056fea2646970667358221220f04849af2e79b4a3cecd7fdcf90e3bca4cfd32e59923d5d8ed247d08e5d70ab064736f6c63430008040033";

export class Governance__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Governance> {
    return super.deploy(_token, overrides || {}) as Promise<Governance>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): Governance {
    return super.attach(address) as Governance;
  }
  connect(signer: Signer): Governance__factory {
    return super.connect(signer) as Governance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceInterface {
    return new utils.Interface(_abi) as GovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governance {
    return new Contract(address, _abi, signerOrProvider) as Governance;
  }
}