import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'

import GovernanceTokenJson from '../../contracts/Token.sol/GovernanceToken.json'
import { GovernanceToken } from '../../contractsTypes'
import { safeContractCallFactory } from '../hooks/useSafeContractCallFactory/useSafeContractCallFactory'
import { safeContractFunctionFactory } from '../hooks/useSafeContractFunction/useSafeContactFunction'

const governanceTokenAddress = 'INSERT_CONTRACT_ADDRESS'
export const governanceToken = {
  address: governanceTokenAddress,
  contract: new Contract(
    governanceTokenAddress,
    GovernanceTokenJson.abi
  ) as GovernanceToken,
  abi: new Interface(GovernanceTokenJson.abi),
}

export const useGovernanceToken = safeContractCallFactory<GovernanceToken>(
  governanceToken.abi,
  governanceToken.address
)

export const useGovernanceTokenFunction =
  safeContractFunctionFactory<GovernanceToken>(governanceToken.contract)
