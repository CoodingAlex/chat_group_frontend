import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import {
  ChatHeader,
  ChatContainer,
  ChatInputContainer,
  ChatMessages,
} from '../assets/styles/components/Chat'
import Input from './Input'

const Chat = ({}) => {
  const [inp, setInp] = useState('')
  const { state, currentChat } = useContext(AppContext)
  return (
    <ChatContainer>
      <ChatHeader>
        <p>{currentChat}</p>
      </ChatHeader>
      <ChatMessages>
        {state.filteredMessages?.map((message) => (
          <p>{message.message}</p>
        ))}
      </ChatMessages>
        <Input inp={inp} setInp={setInp} />
    </ChatContainer>
  )
}

export default Chat
