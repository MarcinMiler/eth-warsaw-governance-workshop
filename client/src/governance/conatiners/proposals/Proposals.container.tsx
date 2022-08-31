import * as E from 'fp-ts/es6/Either'
import * as A from 'fp-ts/es6/Array'
import * as F from 'fp-ts/es6/function'
import * as O from 'fp-ts/es6/Option'
import { useState } from '@hookstate/core'
import { BigNumber } from '@ethersproject/bignumber'

import { Proposal } from '../../components/proposal/Proposal.component'
import { useProposals } from '../../hooks/useProposals'
import { VoteProposalModalState } from '../voteProposalModal/VoteProposalModal.container'
import * as S from './styles'
import { useGovernanceTokenTotalSupply } from '../../../shared/hooks/useGovernanceTokenTotalSupply/useGovernanceTokenTotalSupply'

export const Proposals = () => {
  const voteForProposalModalState = useState(VoteProposalModalState)
  const governanceTokenTotalSupply = F.pipe(
    useGovernanceTokenTotalSupply(),
    O.getOrElse(() => BigNumber.from(0).toNumber())
  )

  const proposals = F.pipe(
    useProposals(),
    A.map(
      E.fold(
        () => null,
        (proposal) => (
          <Proposal
            {...proposal}
            governanceTokenTotalSupply={governanceTokenTotalSupply}
            onProposalClick={(proposalId) =>
              voteForProposalModalState.set({ isOpen: true, proposalId })
            }
          />
        )
      )
    )
  )

  return <S.Container>{proposals}</S.Container>
}
