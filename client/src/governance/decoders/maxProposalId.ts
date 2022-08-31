import * as t from 'io-ts'

import { BigNumberDecoder } from '../../shared/decoders/bigNumberDecoder'

export const MaxProposalId = t.tuple([BigNumberDecoder])

export type MaxProposalId = t.TypeOf<typeof MaxProposalId>
