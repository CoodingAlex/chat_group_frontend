import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import {
  ChannelHeader,
  ChannelsContainer,
  MemberCard,
  DescriptionContainer,
  MembersContainer,
} from '../assets/styles/components/Sidebar'
const ChannelSidebar = ({ setAllChannelsMode }) => {
  const { getCurrentChatUsers } = useContext(AppContext)
  const users = getCurrentChatUsers()
  return (
    <div>
      <ChannelHeader>
        <button
          onClick={() => {
            setAllChannelsMode(true)
          }}
        >
          back
        </button>
        <h3>All Channels</h3>
      </ChannelHeader>
      <ChannelsContainer>
        <DescriptionContainer>
          <h3>Title description</h3>
          <p>Description</p>
        </DescriptionContainer>
        <MembersContainer>
          <h3>Members</h3>
          {users.map((user) => (
            <MemberCard>
              <p>{user}</p>
            </MemberCard>
          ))}
        </MembersContainer>
      </ChannelsContainer>
    </div>
  )
}

export default ChannelSidebar
