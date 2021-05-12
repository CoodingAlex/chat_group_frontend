import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  ChatInputContainer,
  SendMessageIcon,
} from '../assets/styles/components/Chat';
const Input = ({ inp, setInp }) => {
  const { sendMessage, currentChat } = useContext(AppContext);
  return (
    <ChatInputContainer>
      <input
        type=""
        placeholder="Type a message here"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.isComposing || e.key == 'Enter') {
            sendMessage(currentChat, inp);
            setInp('');
          }
        }}
      />
      <button
        onClick={() => {
          sendMessage(currentChat, inp);
          setInp('');
        }}
      >
        <SendMessageIcon className="far fa-paper-plane"></SendMessageIcon>
      </button>
    </ChatInputContainer>
  );
};

export default Input;
