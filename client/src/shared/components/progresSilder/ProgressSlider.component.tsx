import * as React from 'react'
import { Container, ForVotesProggres, AgainstVotesProgress } from './styles'

type ProgressSliderProps = {
  max: number
  forVotes: number
  againstVotes: number
}

const calculatePercentage = (x: number, max: number) => (x / max) * 100

export const ProgressSlider: React.FC<ProgressSliderProps> = ({
  max,
  forVotes,
  againstVotes,
}) => {
  const forVotesPercentage = calculatePercentage(Number(forVotes), max)
  const againstVotesPercentage = calculatePercentage(Number(againstVotes), max)

  return (
    <Container>
      <ForVotesProggres forVotes={forVotesPercentage} />
      <AgainstVotesProgress
        againstVotes={forVotesPercentage + againstVotesPercentage}
      />
    </Container>
  )
}
