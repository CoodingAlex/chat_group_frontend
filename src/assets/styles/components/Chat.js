import styled from 'styled-components'

export const ChatContainer = styled.div`
	width: 100%;
	background: #252329;
	color: #E0E0E0;
`

export const ChatMessages = styled.div`
	height: 80vh;
	margin: 0 50px;
	margin-top: 15px;
	overflow: scroll;
	&::-webkit-scrollbar {
    display: none;
  }
`

export const ChatInputContainer = styled.div`
	height: 10%;
	margin: 0 50px;
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
	padding: 0 50px;
	display: flex;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0,0,0,0.25)
`
