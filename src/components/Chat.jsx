import React, { useContext, useState, useRef, useEffect } from 'react';
import AppContext from '../context/AppContext';
import {
  ChatHeader,
  ChatContainer,
  ChatInputContainer,
  ChatMessages,
} from '../assets/styles/components/Chat';
import Message from './Message';
import Input from './Input';

const Chat = ({}) => {
  const chat = useRef();
  const [inp, setInp] = useState('');
  const { state, currentChat, messages } = useContext(AppContext);
  useEffect(() => {
    chat.current.scroll(0, chat.current.scrollHeight);
  }, [state]);

  return (
    <ChatContainer>
      <ChatHeader>
        <p>{currentChat}</p>
      </ChatHeader>
      <ChatMessages ref={chat}>
        {state.filteredMessages?.map((message) => (
          <Message {...message} />
        ))}
      </ChatMessages>
      <Input inp={inp} setInp={setInp} />
    </ChatContainer>
  );
};

export default Chat;
