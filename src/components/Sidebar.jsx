import React, { useContext, useState } from 'react'
import AllChannelsSidebar from './AllChannelsSidebar'
import ChannelSidebar from './ChannelSidebar'
const Sidebar = ({}) => {
  const [ allChannelsMode, setAllChannelsMode ] = useState(true)
  return (
    <>
      {allChannelsMode
       ? <AllChannelsSidebar setAllChannelsMode={setAllChannelsMode}/>
       : <ChannelSidebar setAllChannelsMode={setAllChannelsMode}/>
    }
    </>
  )
}

export default Sidebar
