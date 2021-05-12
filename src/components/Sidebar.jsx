import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import AllChannelsSidebar from './AllChannelsSidebar';
import ChannelSidebar from './ChannelSidebar';
import UserInfo from './UserInfo';
import {
  SidebarContainer,
  CloseSidebarIcon,
} from '../assets/styles/components/Sidebar';
import UserInfoMenu from './UserInfoMenu';
const Sidebar = ({}) => {
  const { isSidebar, setIsSidebar } = useContext(AppContext);
  const [allChannelsMode, setAllChannelsMode] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <SidebarContainer isSidebar={isSidebar}>
      <CloseSidebarIcon
        className="fas fa-times"
        isSidebar={isSidebar}
        onClick={() => setIsSidebar((prev) => !prev)}
      />
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
