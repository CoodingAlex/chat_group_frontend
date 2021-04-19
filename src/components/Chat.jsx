import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'

const Chat = ({  }) => {
	const [inp, setInp] = useState("")
	const { state, sendMessage, currentChat } = useContext(AppContext)
	return (
		<div >
			<input type="" value={inp} onChange={(e) => { setInp(e.target.value) }} />
			<button onClick={() => sendMessage(currentChat,inp)}></button>
			{state.filteredMessages?.map(message => (
					<p>{message.message}</p>
			))}	
		</div>
	);
}

export default Chat;
