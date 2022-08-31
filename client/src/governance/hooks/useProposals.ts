import * as F from 'fp-ts/es6/function'
import * as E from 'fp-ts/es6/Either'
import * as O from 'fp-ts/es6/Option'
import * as NEA from 'fp-ts/es6/NonEmptyArray'
import * as A from 'fp-ts/es6/Array'
import * as t from 'io-ts'

import { useGovernanceCalls } from '../contracts/governance'
import { useMaxProposalId } from './useMaxProposalId'
import { Proposal } from '../decoders/proposal'

const filterEmptyResponse = (proposals: E.Either<t.Errors, Proposal>[]) =>
  F.pipe(
    A.head(proposals),
    O.chainEitherK(
      E.chainW((proposal) =>
        proposal.id.toNumber() === 0
          ? E.left('Empty response')
          : E.right(proposals)
      )
    ),
    O.fold(() => [], F.identity)
  )

export const useProposals = () => {
  const proposalIds = F.pipe(
    useMaxProposalId(),
    E.getOrElse(() => 0),
    (maxProposalId) => NEA.range(1, maxProposalId - 1)
  )

  return F.pipe(
    useGovernanceCalls(
      proposalIds.map((id) => ({ method: 'getProposal', args: [id] }))
    ),
    A.map(Proposal.decode),
    filterEmptyResponse
  )
}
