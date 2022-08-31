import * as t from 'io-ts'
import { BigNumberDecoder } from '../../shared/decoders/bigNumberDecoder'

export enum ProposalState {
  Pending,
  Active,
  Succeeded,
  Deafeated,
  Expired,
}

export const Proposal = t.exact(
  t.type({
    id: BigNumberDecoder,
    name: t.string,
    forVotes: BigNumberDecoder,
    againstVotes: BigNumberDecoder,
    startBlock: BigNumberDecoder,
    endBlock: BigNumberDecoder,
    state: t.number,
  })
)

export type Proposal = t.TypeOf<typeof Proposal>
