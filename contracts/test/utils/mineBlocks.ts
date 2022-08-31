import { ethers } from 'hardhat'

import * as F from 'fp-ts/lib/function'
import * as NEA from 'fp-ts/lib/NonEmptyArray'
import * as TE from 'fp-ts/lib/TaskEither'

export const mineBlocks = (n: number) =>
  F.pipe(
    NEA.range(0, n),
    NEA.map(() =>
      TE.tryCatch(
        () => ethers.provider.send('evm_mine', []),
        () => 'Failed at mining block'
      )
    ),
    TE.sequenceSeqArray
  )
