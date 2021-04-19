import styled from 'styled-components'

export const ChatContainer = styled.div`
	width: 100%;
	padding: 0 50px;
	background: #252329;
	color: #E0E0E0;
`

export const ChatMessages = styled.div`
	height: 80%;
	overflow: scroll;
	&::-webkit-scrollbar {
    display: none;
  }
`

export const ChatInputContainer = styled.div`
	height: 10%;
	display: flex;
	flex-direction: row;
	button {
		height: 50%;	
		width: 40px;
	}
	input {
		flex: 1;
		height: 50%;
		background: #3C393F;
		color: #828282;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 14px 12px;
		font-family: 'Noto Sans', sans-serif;
	}
`

export const ChatHeader = styled.div`
	height: 10%;
`
