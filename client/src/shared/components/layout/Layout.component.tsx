import { ConnectWallet } from '../../containers/connectWallet/ConnectWallet.conatiner'
import { MintTokenButton } from '../../containers/mintTokenButton/MintTokenButton.container'
import * as S from './styles'

export const Layout: React.FC = ({ children }) => (
  <S.Container>
    <S.TopBar>
      <MintTokenButton />
      <ConnectWallet />
    </S.TopBar>
    {children}
  </S.Container>
)
