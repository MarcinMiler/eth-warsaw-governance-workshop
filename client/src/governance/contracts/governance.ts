import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'

import GovernanceJson from '../../contracts/Governance.sol/Governance.json'
import { Governance } from '../../contractsTypes'
import {
  safeContractCallFactory,
  safeContractCallsFactory,
} from '../../shared/hooks/useSafeContractCallFactory/useSafeContractCallFactory'
import { safeContractFunctionFactory } from '../../shared/hooks/useSafeContractFunction/useSafeContactFunction'

const governanceAddress = 'INSERT_CONTRACT_ADDRESS'
export const governance = {
  address: governanceAddress,
  contract: new Contract(governanceAddress, GovernanceJson.abi) as Governance,
  abi: new Interface(GovernanceJson.abi),
}

export const useGovernance = safeContractCallFactory<Governance>(
  governance.abi,
  governance.address
)

export const useGovernanceCalls = safeContractCallsFactory<Governance>(
  governance.abi,
  governance.address
)

export const useGovernanceFunction = safeContractFunctionFactory<Governance>(
  governance.contract
)
