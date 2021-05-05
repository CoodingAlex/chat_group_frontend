import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  ChannelHeader,
  ChannelsContainer,
  MemberCard,
  DescriptionContainer,
  MembersContainer,
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
              <p>{user}</p>
            </MemberCard>
          ))}
        </MembersContainer>
      </ChannelsContainer>
    </div>
  );
};

export default ChannelSidebar;
