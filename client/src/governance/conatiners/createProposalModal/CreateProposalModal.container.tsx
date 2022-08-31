import * as React from 'react'
import { createState, useState } from '@hookstate/core'

import { Button } from '../../../shared/components/button/Button.component'
import { Input } from '../../../shared/components/input/Input.component'
import { Modal } from '../../../shared/components/modal/Modal.component'
import { useGovernanceFunction } from '../../contracts/governance'
import { ButtonWrapper, Title } from './styles'

export const CreateProposalModalState = createState(false)

export const CreateProposalModalContainer = () => {
  const modalState = useState(CreateProposalModalState)
  const formState = useState({
    title: '',
  })

  const { send, state } = useGovernanceFunction('createProposal')

  React.useEffect(() => {
    if (state.status === 'Success') {
      modalState.set(false)
      formState.set({ title: '' })
    }
  }, [state.status])

  const isOpen = modalState.get()

  const createPropsal = () => {
    send(formState.get().title)
  }

  return (
    <Modal isOpen={isOpen} closeModal={() => modalState.set(false)}>
      <Title>Create Proposal</Title>
      <Input
        label="Title"
        value={formState.get().title}
        onChange={(title) => formState.set({ title })}
      />

      <ButtonWrapper>
        <Button onClick={createPropsal}>
          {state.status === 'Mining' ? 'Loading' : 'C R E A T Ξ'}
        </Button>
      </ButtonWrapper>
    </Modal>
  )
}
