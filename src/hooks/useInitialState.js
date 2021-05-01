import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import axios from 'axios';
import cookie from 'cookie'
import useAuth from './useAuth'
const ENDPOINT = 'http://localhost:8080';

const useInitialState = () => {
    const [currentChat, setCurrentChat] = useState('welcome');
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);
    const [availableRooms, setAvailableRooms] = useState([]);
    const [state, setState] = useState({
        filteredMessages: [],
    });
    const [socket, setSocket] = useState();
    const { user, registerUser, userInCookies } = useAuth()
    useEffect(() => {
        try {
            if(!user) {
                return
            }
            console.log(user)
            const socket = socketIoClient(ENDPOINT, {
                query: {
                    user : user.name
                }
            });
            setSocket(socket);

            // This happens when you recibe a new message
            socket.on('message', (data) => {
                console.log(data);
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
            // This happens when you join to a new chat, or someone join to a chat
            // that you are already in
            socket.on('joinedRoom', (data) => {
                const newChat = {
                    name: data.room,
                    users: data.users,
                };

                //check if chat already exists
                setChats((prev) => {
                    const exists = prev.filter(
                        (chat) => chat.name === newChat.name
                    );
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

    const joinChat = (chat) => {
        socket?.emit('joinRoom', { room: chat });
        setAvailableRooms((prev) => {
            return prev.filter((item) => item.name !== chat);
        });
        setCurrentChat(chat);
    };

    const getCurrentChatUsers = () => {
        const users = chats.filter((item) => item.name === currentChat)[0]
            .users;
        return users;
    };

    const sendMessage = (chat, message = 'aaa') => {
        socket.emit('message', { room: chat, message });
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
        registerUser
    };
};

export default useInitialState;
