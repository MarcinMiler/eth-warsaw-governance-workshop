import * as B from 'fp-ts/es6/boolean'
import * as F from 'fp-ts/es6/function'

import { ProgressSlider } from '../../../shared/components/progresSilder/ProgressSlider.component'
import {
  Proposal as ProposalType,
  ProposalState,
} from '../../decoders/proposal'
import { useCalculateProposalEndTime } from '../../hooks/useCalculateProposalEndTime'
import {
  Container,
  Id,
  Title,
  ProgressSliderWrapper,
  DeadlineWrapper,
  EndTime,
  EndTimeValue,
  Row,
  StatusIndicator,
  StatusText,
  StatusWrapper,
} from './styles'

type ProposalProps = {
  governanceTokenTotalSupply: number
  onProposalClick?: (proposalId: string) => void
} & ProposalType

export const Proposal: React.FC<ProposalProps> = ({
  id,
  name,
  forVotes,
  againstVotes,
  endBlock,
  state,
  governanceTokenTotalSupply,
  onProposalClick = () => null,
}) => {
  const proposalEndTime = useCalculateProposalEndTime(
    endBlock.toNumber(),
    state
  )

  const handleProposalClick = () =>
    F.pipe(
      state === ProposalState.Active,
      B.fold(
        () => null,
        () => onProposalClick(id.toString())
      )
    )

  return (
    <Container onClick={handleProposalClick}>
      <Row>
        <Id>ID: {id.toString()}</Id>

        <StatusWrapper>
          <StatusIndicator state={state} />

          <StatusText>{ProposalState[state]}</StatusText>
        </StatusWrapper>
      </Row>
      <Title>{name}</Title>

      <ProgressSliderWrapper>
        <ProgressSlider
          max={governanceTokenTotalSupply}
          forVotes={forVotes.toNumber()}
          againstVotes={againstVotes.toNumber()}
        />
      </ProgressSliderWrapper>

      <DeadlineWrapper>
        <EndTime>Estimated end time</EndTime>
        <EndTimeValue>
          {proposalEndTime.toString().substring(0, 24)}
        </EndTimeValue>
      </DeadlineWrapper>
    </Container>
  )
}
