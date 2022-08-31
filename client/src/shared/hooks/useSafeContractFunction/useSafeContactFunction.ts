import {
  TransactionStatus,
  useContractFunction as useDappUseContractFunction,
} from '@usedapp/core'
import { Contract } from 'ethers'

import { useTransactionNotifications } from '../useTransactionNotifications/useTransactionNotifications'

interface UseSafeContractFunctionReturnType<
  ContractType extends Contract,
  Key extends keyof ContractType['functions'],
  Args extends Parameters<ContractType['functions'][Key]>
> {
  send: (...args: Args) => Promise<void>
  state: TransactionStatus
}

export const safeContractFunctionFactory =
  <ContractType extends Contract>(contract: Contract) =>
  <
    Key extends keyof ContractType['functions'],
    Args extends Parameters<ContractType['functions'][Key]>
  >(
    functionName: Key
  ): UseSafeContractFunctionReturnType<ContractType, Key, Args> => {
    const { send, state } = useDappUseContractFunction(
      contract,
      functionName as string
    )
    useTransactionNotifications(state.status)

    return {
      send: (...args: Args) => send(...args),
      state,
    }
  }
