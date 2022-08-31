import * as F from 'fp-ts/es6/function'
import * as E from 'fp-ts/es6/Either'

import { useGovernance } from '../contracts/governance'
import { MaxProposalId } from '../decoders/maxProposalId'

export const useMaxProposalId = () =>
  F.pipe(
    useGovernance('getProposalCount', []),
    MaxProposalId.decode,
    E.bimap(
      () => 'Failed at parsing proposals',
      (maxProposalId) => Number(maxProposalId.toString())
    )
  )
