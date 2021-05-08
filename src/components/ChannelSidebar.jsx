import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  ChannelHeader,
  ChannelsContainer,
  MemberCard,
  DescriptionContainer,
  MembersContainer,
  MemberPhoto,
  MemberUsername,
} from '../assets/styles/components/Sidebar';
const ChannelSidebar = ({ setAllChannelsMode }) => {
  const { getCurrentChatUsers, getCurrentChatDescription } = useContext(
    AppContext
  );
  const users = getCurrentChatUsers();
  const description = getCurrentChatDescription();
  return (
    <div>
      <ChannelHeader>
        <button
          onClick={() => {
            setAllChannelsMode(true);
          }}
        >
          back
        </button>
        <h3>All Channels</h3>
      </ChannelHeader>
      <ChannelsContainer>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
        <MembersContainer>
          <h3>Members</h3>
          {users.map((user) => (
            <MemberCard>
              <MemberPhoto src={user.photo} alt={`${user.username} photo`} />
              <MemberUsername>{user.username}</MemberUsername>
            </MemberCard>
          ))}
        </MembersContainer>
      </ChannelsContainer>
    </div>
  );
};

export default ChannelSidebar;
