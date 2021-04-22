import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { SidebarContainer, ChannelsContainer } from '../assets/styles/components/Sidebar'
const Sidebar = ({}) => {
  const [inp, setInp] = useState('')
  const { chats, setCurrentChat, joinChat, availableRooms } = useContext(AppContext)
  return (
    <SidebarContainer>
      <input
        type=""
        value={inp}
        placeholder="Search"
        onChange={(e) => {
          setInp(e.target.value)
        }}
      />
      <button onClick={() => joinChat(inp)}></button>
      <ChannelsContainer
        >
      {chats?.map((chat) => (
        <p
          onClick={() => {
            setCurrentChat(chat.name)
          }}
        >
          {chat.name}
        </p>
      ))}
      </ChannelsContainer
      >
        <h3>Available</h3>
        {availableRooms.map(room => {
          return <p onClick={() => {joinChat(room.name)}}>{room.name}</p>
        })}
    </SidebarContainer>
  )
}

export default Sidebar
