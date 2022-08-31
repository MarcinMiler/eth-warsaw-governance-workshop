import { useGovernanceTokenFunction } from '../../contracts/governanceToken'
import { Container } from './styles'

export const MintTokenButton = () => {
  const { send } = useGovernanceTokenFunction('mintFreeTokens')

  const handleButtonClick = () => send()

  return <Container onClick={handleButtonClick}>m i n t 💸</Container>
}
