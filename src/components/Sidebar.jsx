import React, { useContext, useState } from 'react'
import AllChannelsSidebar from './AllChannelsSidebar'
import ChannelSidebar from './ChannelSidebar'
import { SidebarContainer } from '../assets/styles/components/Sidebar'
const Sidebar = ({}) => {
  const [ allChannelsMode, setAllChannelsMode ] = useState(true)
  return (
    <SidebarContainer>
      {allChannelsMode
       ? <AllChannelsSidebar setAllChannelsMode={setAllChannelsMode}/>
       : <ChannelSidebar setAllChannelsMode={setAllChannelsMode}/>
    }
    </SidebarContainer>
  )
}

export default Sidebar
