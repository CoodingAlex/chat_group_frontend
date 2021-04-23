import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { ChatInputContainer } from '../assets/styles/components/Chat'
const Input = ({ inp, setInp }) => {
  const { sendMessage, currentChat } = useContext(AppContext)
  return (
    <ChatInputContainer>
      <input
        type=""
        placeholder="Type a message here"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value)
        }}
      />
      <button
        onClick={() => {
          sendMessage(currentChat, inp)
          setInp('')
        }}
      ></button>
    </ChatInputContainer>
  )
}

export default Input
