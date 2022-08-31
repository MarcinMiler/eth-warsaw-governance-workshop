import { ProposalActions } from '../../governance/components/proposalActions/ProposalActions.component'
import { CreateProposalModalContainer } from '../../governance/conatiners/createProposalModal/CreateProposalModal.container'
import { Proposals } from '../../governance/conatiners/proposals/Proposals.container'
import { VoteProposalModal } from '../../governance/conatiners/voteProposalModal/VoteProposalModal.container'
import { Layout } from '../../shared/components/layout/Layout.component'
import { Container, Title } from './styles'

export const GovernancePage = () => {
  return (
    <Layout>
      <Container>
        <Title>Governance</Title>

        <ProposalActions />

        <Proposals />
      </Container>

      <CreateProposalModalContainer />
      <VoteProposalModal />
    </Layout>
  )
}
