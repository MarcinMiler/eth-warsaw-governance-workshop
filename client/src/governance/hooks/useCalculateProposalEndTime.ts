import * as dateUtils from 'date-fns'
import { useBlockNumber } from '@usedapp/core'
import * as F from 'fp-ts/es6/function'
import * as O from 'fp-ts/es6/Option'
import * as B from 'fp-ts/es6/boolean'

import { useBlock } from '../../shared/hooks/useBlock/useBlock'
import { ProposalState } from '../decoders/proposal'

const BLOCK_INTERVAL = 15

export const useCalculateProposalEndTime = (
  endBlock: number,
  state: ProposalState
) => {
  const currentBlockNumber = useBlockNumber()
  const endBlockDetails = useBlock(endBlock)

  return F.pipe(
    state > ProposalState.Active,
    B.fold(
      () =>
        dateUtils.add(new Date(), {
          seconds: (endBlock - (currentBlockNumber || 1)) * BLOCK_INTERVAL,
        }),
      () =>
        F.pipe(
          O.fromNullable(endBlockDetails),
          O.chainNullableK((block) => block.timestamp),
          O.map((blockTimestamp) => new Date(blockTimestamp * 1000)),
          O.getOrElse(() => new Date())
        )
    )
  )
}
