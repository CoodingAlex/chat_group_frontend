import React, { useState, useEffect } from 'react'
import socketIoClient from 'socket.io-client'

const ENDPOINT = 'http://localhost:8080'

const useInitialState = () => {
  const [currentChat, setCurrentChat] = useState('welcome')
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([])
  const [state, setState] = useState({
    filteredMessages: [],
  })
  const [socket, setSocket] = useState()
  useEffect(() => {
    try {
      const socket = socketIoClient(ENDPOINT)
      setSocket(socket)

      socket.on('message', (data) => {
        const newMessage = {
          chat: data.room,
          message: data.message,
        }
        setMessages((prev) => [...prev, newMessage])
      })

      socket.on('joinedRoom', (data) => {
        const newChat = {
          name: data.room,
          users: data.users,
        }
        //check if chat already exists
        setChats((prev) => {
          const exists = prev.filter((chat) => chat.name === newChat.name)
          if (exists.length === 0) {
            return [...prev, newChat]
          }
          return [...prev]
        })
      })
    } catch (err) {}
  }, [])

  useEffect(() => {
    const filteredMessages = filterMessages(currentChat)
    setState({
      ...state,
      filteredMessages,
    })
  }, [currentChat, messages])

  const filterMessages = (chat) => {
    const filteredMessages = messages.filter((message) => message.chat === chat)
    return filteredMessages
  }

  const joinChat = (chat) => {
    socket.emit('joinRoom', { room: chat })
    setCurrentChat(chat)
  }

  const sendMessage = (chat, message = 'aaa') => {
    socket.emit('message', { room: chat, message })
  }
  return {
    state,
    setCurrentChat,
    currentChat,
    joinChat,
    sendMessage,
    messages,
    chats,
  }
}

export default useInitialState
