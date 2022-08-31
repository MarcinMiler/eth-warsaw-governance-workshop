import { useState } from '@hookstate/core'

import { Button } from '../../../shared/components/button/Button.component'
import { CreateProposalModalState } from '../../conatiners/createProposalModal/CreateProposalModal.container'
import { Container } from './styles'

export const ProposalActions = () => {
  const createProposalModalState = useState(CreateProposalModalState)

  const openCreateProposalModal = () => createProposalModalState.set(true)

  return (
    <Container>
      <Button onClick={openCreateProposalModal}>Create Proposal</Button>
    </Container>
  )
}
