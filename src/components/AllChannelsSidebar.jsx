import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import {
  SidebarContainer,
  ChannelsContainer,
} from '../assets/styles/components/Sidebar'

function memoized(prevProps, nextProps) {
  return true
}
const AllChannelsSidebar = ({setAllChannelsMode}) => {
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
      <ChannelsContainer>
        {chats?.map((chat) => (
          <p
            onClick={() => {
              setCurrentChat(chat.name)
              setAllChannelsMode(false)
            }}
          >
            {chat.name}
          </p>
        ))}
      </ChannelsContainer>
      <h3>Available</h3>
      {availableRooms.map((room) => {
        return (
          <p
            onClick={() => {
              joinChat(room.name)
            }}
          >
            {room.name}
          </p>
        )
      })}
    </SidebarContainer>
  )
}

const MemoizedAllChannelsSidebar = React.memo(AllChannelsSidebar, memoized)

export default MemoizedAllChannelsSidebar
