import React from 'react'
import {
  ModalContainer,
  AddChannelModal,
  ModalInput,
  ModalButton,
  ModalTextArea,
} from '../assets/styles/components/Modal'
const Modal = ({
  setIsModal,
  setInputValue,
  setAreaValue,
  inputValue,
  areaValue,
  buttonClick
}) => {
  return (
    <ModalContainer onClick={(e) => setIsModal(false)}>
      <AddChannelModal onClick={(e) => e.stopPropagation()}>
        <h3>New Channel</h3>
        <ModalInput
          type="text"
          value={inputValue}
          placeholder="Channel name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ModalTextArea
          type="text"
          value={areaValue}
          placeholder="Channel description"
          onChange={(e) => setAreaValue(e.target.value)}
        />
        <ModalButton onClick={(e) => buttonClick()}>Save</ModalButton>
      </AddChannelModal>
    </ModalContainer>
  )
}

export default Modal
