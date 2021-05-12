import styled from 'styled-components';
import { device } from '../utils/device';

export const SidebarContainer = styled.div`
  color: #bdbdbd;
  background-color: #120f13;
  font-family: 'Noto Sans', sans-serif;
  position: relative;
  h3 {
    color: #e0e0e0;
  }

  @media ${device.tablet} {
    left: ${(props) => (props.isSidebar ? '0' : '-100%')};
    position: fixed;
    height: 100vh;
    width: 80vw;
    z-index: 1;
    transition: 0.5s all;
  }
`;

export const CloseSidebarIcon = styled.i`
  display: none;

  @media ${device.tablet} {
    display: ${(props) => (props.isSidebar ? 'block' : 'none')};
    position: fixed;
    right: 2%;
    top: 2%;
    font-size: 18px;
  }
`;
export const ChannelsContainer = styled.div`
  width: 80%;
  padding: 10px;
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const DescriptionContainer = styled.div`
  margin: 15px 0;
  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
export const MembersContainer = styled.div`
  h3 {
    font-weight: 600;
  }
`;

export const MemberPhoto = styled.img`
  max-width: 32px;
  max-height: 32px;
`;

export const MemberUsername = styled.p``;
export const MemberCard = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  align-items: center;
`;

export const ChannelHeader = styled.div`
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 10px;
  align-items: center;
  h3 {
    margin-left: 10px;
  }
`;

export const ChannelHeaderIcon = styled.i`
  cursor: pointer;
`;
export const AddChannelIconContainer = styled.div`
  background: #252329;
  width: 25px;
  display: flex;
  justify-content: center;
  height: 25px;
  align-items: center;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
`;
export const AddChannelIcon = styled.i`
  color: white;
`;
export const AllChannelsHeader = styled.div`
  display: flex;
  padding: 10px 10px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Channel = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
