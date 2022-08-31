import { BigNumber } from '@ethersproject/bignumber'
import * as F from 'fp-ts/es6/function'
import * as t from 'io-ts'

export const BigNumberDecoder = new t.Type<BigNumber, BigNumber, unknown>(
  'BigNumber',
  (u): u is BigNumber => u instanceof BigNumber,
  (value, context) =>
    BigNumber.isBigNumber(value)
      ? t.success(value)
      : t.failure(value, context, 'Failed at parsing BigNumber'),
  F.identity
)
