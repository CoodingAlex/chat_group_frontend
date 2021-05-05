import React, { useState } from 'react';
import AllChannelsSidebar from './AllChannelsSidebar';
import ChannelSidebar from './ChannelSidebar';
import UserInfo from './UserInfo';
import { SidebarContainer } from '../assets/styles/components/Sidebar';
import UserInfoMenu from './UserInfoMenu';
const Sidebar = ({}) => {
  const [allChannelsMode, setAllChannelsMode] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <SidebarContainer>
      {allChannelsMode ? (
        <AllChannelsSidebar setAllChannelsMode={setAllChannelsMode} />
      ) : (
        <ChannelSidebar setAllChannelsMode={setAllChannelsMode} />
      )}
      <UserInfo setIsMenu={setIsMenu} />
      <UserInfoMenu isMenu={isMenu} />
    </SidebarContainer>
  );
};

export default Sidebar;
