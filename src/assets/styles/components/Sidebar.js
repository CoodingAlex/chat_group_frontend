import styled from 'styled-components'

export const SidebarContainer = styled.div`
	display: flex;
	background-color: #120F13;
	flex-direction: column;
	align-items: center;
	color: #BDBDBD;
	font-weight: 700;
	input {
		padding: 14px 12px;
		margin-top: 20px;
		background: #3C393F;
		border: none;
		border-radius: 5px;
		height: 40px;
		width: 80%;
		color: #828282;
		font-family: 'Noto Sans', sans-serif;
		outline: none;
	}

	button {
		height: 20px;
		width: 40px;
	}
`

export const ChannelsContainer = styled.div`
	width: 80%;
`
