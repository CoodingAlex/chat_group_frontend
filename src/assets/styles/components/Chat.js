import styled from 'styled-components';
import { device } from '../utils/device';

export const ChatContainer = styled.div`
  width: 100%;
  background: #252329;
  color: #e0e0e0;
`;

export const ChatMessages = styled.div`
  height: 80vh;
  margin: 0 50px;
  margin-top: 15px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.mobileM} {
    margin: 0 10px;
    margin-top: 15px;
  }
`;

export const ChatInputContainer = styled.div`
  height: 10%;
  margin: 0 50px;
  display: flex;
  button {
    height: 45%;
    background: #2f80ed;
    border: none;
    width: 40px;
    border-radius: 8px;
    position: relative;
    right: 40px;
    top: 2px;
  }
  input {
    flex: 1;
    height: 50%;
    background: #3c393f;
    color: #828282;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 14px 12px;
    font-family: 'Noto Sans', sans-serif;
  }

  @media ${device.tablet} {
    margin: 0 10px;
    button {
      height: 55%;
    }
    input {
      height: 60%;
    }
  }
`;
export const SendMessageIcon = styled.i`
  color: white;
  cursor: pointer;
`;

export const OpenSidebarIcon = styled.i`
  display: none;
  @media ${device.tablet} {
    display: inline-block;
    margin-right: 10px;
  }
`;
export const ChatHeader = styled.div`
  height: 7%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: default;

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;
