import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import useAuth from './useAuth';
const ENDPOINT = 'https://chat-gruop.herokuapp.com/';
//const ENDPOINT = 'http://localhost:8080/';

const useInitialState = () => {
  const [currentChat, setCurrentChat] = useState('welcome');
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isSidebar, setIsSidebar] = useState(false);
  const [state, setState] = useState({
    filteredMessages: [],
  });
  const [socket, setSocket] = useState();
  const { user, registerUser, userInCookies, login, logout } = useAuth();
  useEffect(() => {
    try {
      if (!user) {
        const token = userInCookies();
        if (token) {
          login().then(() => {});
          return;
        }
      }
      if (socket) {
        return;
      }
      const socket = socketIoClient(ENDPOINT, {
        query: {
          token: user.token,
        },
      });
      setSocket(socket);

      // This happens when you recibe a new message
      socket.on('message', (data) => {
        const newMessage = {
          chat: data.room,
          message: data.message,
          name: data.name,
          photo: data.photo,
          timestamp: data.timeStamp,
        };
        setMessages((prev) => [...prev, newMessage]);
      });

      socket.on('newRoom', (data) => {
        const newChat = {
          name: data.room,
          users: data.users,
        };
        setAvailableRooms((prev) => [...prev, newChat]);
      });

      socket.emit('availableChats', { token: user.token });
      socket.on('availableChats', (data) => {
        setAvailableRooms(data.chats);
      });
      socket.on('joinedRoom', (data) => {
        console.log(data);
        const newChat = {
          name: data.room,
          users: data.users,
          description: data.description,
        };

        //check if chat already exists
        setChats((prev) => {
          const exists = prev.filter((chat) => chat.name === newChat.name);
          if (exists.length === 0) {
            return [...prev, newChat];
          }
          const newData = prev.map((item) => {
            if (item.name === exists[0].name) {
              item.users = data.users;
              return item;
            }
            return item;
          });
          return [...newData];
        });
      });
      //TODO: implement the error handling
    } catch (err) {}
    return () => {
      socket?.disconnect();
      setSocket(null);
    };
  }, [user]);

  // This effect update the filtered messages (the messages that should be in the screen)
  // when the state current chat change or when you recibe a new message
  useEffect(() => {
    const filteredMessages = filterMessages(currentChat);

    setState({
      ...state,
      filteredMessages,
    });
  }, [currentChat, messages]);

  // Filter the messages by the current chat
  const filterMessages = (chat) => {
    const filteredMessages = messages.filter(
      (message) => message.chat === chat
    );
    return filteredMessages;
  };

  const joinChat = (chat, description) => {
    socket?.emit('joinRoom', {
      room: chat,
      token: user.token,
      description,
      name: user.name,
      photo: user.photo,
    });
    setAvailableRooms((prev) => {
      return prev.filter((item) => item.name !== chat);
    });
    setCurrentChat(chat);
  };

  const getCurrentChatUsers = () => {
    const users = chats.filter((item) => item.name === currentChat)[0].users;
    return users;
  };

  const getCurrentChatDescription = () => {
    const description = chats.filter((item) => item.name === currentChat)[0]
      .description;
    return description;
  };

  const sendMessage = (chat, message = 'aaa') => {
    socket.emit('message', { room: chat, message, token: user.token });
  };

  const disconnect = () => {
    socket.disconnect();
  };
  return {
    state,
    setCurrentChat,
    currentChat,
    joinChat,
    sendMessage,
    messages,
    chats,
    availableRooms,
    getCurrentChatUsers,
    user,
    registerUser,
    logout,
    disconnect,
    login,
    getCurrentChatDescription,
    isSidebar,
    setIsSidebar,
  };
};

export default useInitialState;
