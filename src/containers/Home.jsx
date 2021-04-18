import React, { useEffect, useState } from 'react'
import socketIoClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:8080'

const Home = ({}) => {
  const [response, setResponse] = useState()
  const [socket, setSocket] = useState()
  const [aRoom, setAroom] = useState([])
  const [bRoom, setBroom] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
    try {
      const socket = socketIoClient(ENDPOINT)
      setSocket(socket)

      socket.on('message', (data) => {
        if (data.room === 'a') {
          setAroom((prev) => [...prev, data.message])
        } else {
          setBroom((prev) => [...prev, data.message])
        }
      })

      socket.on('joinedRoom', (data) => {
        console.log(data)
      })
    } catch (err) {}
  }, [])

  function handleJoinButton(room) {
    socket.emit('joinRoom', { room })
  }

  function handleSendMessage(room) {
    socket.emit('message', { message: input, room })
  }
  return (
    <div>
      hola
      <h2>{response ? response : 'no response'}</h2>
      <button
        onClick={() => {
          handleJoinButton('a')
        }}
      >
        join a room
      </button>
      <button
        onClick={() => {
          handleJoinButton('b')
        }}
      >
        join b room
      </button>
      <br />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          handleSendMessage('a')
        }}
      >
        send message to a room
      </button>
      <button
        onClick={() => {
          handleSendMessage('b')
        }}
      >
        send message to b room
      </button>
      <div>
        {aRoom.map((message) => (
          <p>a {message}</p>
        ))}
      </div>
      <div>
        {bRoom.map((message) => (
          <p>b {message}</p>
        ))}
      </div>
    </div>
  )
}
export default Home
