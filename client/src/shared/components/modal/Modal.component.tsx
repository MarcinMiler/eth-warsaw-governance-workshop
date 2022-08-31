import * as React from 'react'
import ReactModal from 'react-modal'

import { CloseIcon, IconWrapper } from './styles'

const customStyles = {
  content: {
    width: '720px',
    padding: '30px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(244, 244, 245)',
    borderRadius: '15px',
    boxShadow: 'rgb(0 0 0 / 40%) 0px 0px 33px 8px',
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
  },
}

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
}

ReactModal.setAppElement('#modal-root')

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <IconWrapper>
        <CloseIcon onClick={closeModal} />
      </IconWrapper>

      {children}
    </ReactModal>
  )
}
