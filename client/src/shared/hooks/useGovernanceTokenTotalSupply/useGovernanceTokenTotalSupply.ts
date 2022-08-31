import * as F from 'fp-ts/es6/function'
import * as O from 'fp-ts/es6/Option'
import * as t from 'io-ts'
import * as ethers from 'ethers'

import { useGovernanceToken } from '../../contracts/governanceToken'
import { BigNumberDecoder } from '../../decoders/bigNumberDecoder'

const TotalTokenSupplyDecoder = t.tuple([BigNumberDecoder])

export const useGovernanceTokenTotalSupply = () =>
  F.pipe(
    useGovernanceToken('totalSupply', []),
    TotalTokenSupplyDecoder.decode,
    O.fromEither,
    O.map(([totalSupply]) => Number(ethers.utils.formatEther(totalSupply)))
  )
