import React from 'react';
import { ChatIconContainer } from '../assets/styles/components/ChatIcon';

const ChatIcon = ({ name }) => {
  const getChatInitials = () => {
    return name[0];
  };
  return <ChatIconContainer>{getChatInitials()}</ChatIconContainer>;
};

export default ChatIcon;
