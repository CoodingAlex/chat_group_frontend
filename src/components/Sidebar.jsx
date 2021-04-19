import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'
const Sidebar = ({  }) => {
	const [inp, setInp] = useState("")
	const { chats, setCurrentChat, joinChat } = useContext(AppContext)
	return (
		<div >
			<input type="" value={inp} onChange={(e) => { setInp(e.target.value) }} />
			<button onClick={() => joinChat(inp)}></button>
			{chats?.map(chat => (

				<p onClick={() => { setCurrentChat(chat.name) }}>{chat.name}</p>
			))}	
		</div>
	);
}

export default Sidebar;
