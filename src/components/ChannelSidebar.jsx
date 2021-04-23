import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
const ChannelSidebar = ({setAllChannelsMode}) => {
    const { getCurrentChatUsers } = useContext(AppContext)
    const users = getCurrentChatUsers()
    return (
        <div>
            <div>
                <button onClick={() => { setAllChannelsMode(true) }}>back</button>
                <p>All Channels</p>
            </div>
            <div>
                <p>Title description</p>
                <p>Description</p>
            </div>
            <div>
              { users.map(user => (
                <p>{user}</p>
              ))}
            </div>
        </div>
    );
}

export default ChannelSidebar;
