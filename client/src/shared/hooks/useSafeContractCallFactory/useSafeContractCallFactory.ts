import {
  useContractCall as useDappUseContractCall,
  useContractCalls as useDappUseContractCalls,
} from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { Contract } from 'ethers'
import * as F from 'fp-ts/es6/function'
import * as A from 'fp-ts/es6/Array'

const mapArrayToObject = <T>(arr: T[] | undefined) =>
  F.pipe(
    Object.entries(arr || {}),
    A.reduce({}, (acc, [key, value]) => ({ ...acc, [key]: value }))
  )

export const safeContractCallFactory =
  <ContractType extends Contract>(abi: Interface, address: string) =>
  <Key extends keyof ContractType['functions']>(
    method: Key,
    args: Parameters<ContractType['functions'][Key]>
  ) =>
    F.pipe(
      useDappUseContractCall({
        abi,
        address,
        args,
        method: method as string,
      })
    )

export const safeContractCallsFactory =
  <ContractType extends Contract>(abi: Interface, address: string) =>
  <Key extends keyof ContractType['functions']>(
    contractCalls: {
      method: Key
      args: Parameters<ContractType['functions'][Key]>
    }[]
  ) =>
    F.pipe(
      useDappUseContractCalls(
        contractCalls.map(({ method, args }) => ({
          abi,
          address,
          method: method as string,
          args,
        }))
      ),
      A.map(mapArrayToObject)
    )
