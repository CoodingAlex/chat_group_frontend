import styled from 'styled-components';

export const SidebarContainer = styled.div`
  color: #bdbdbd;
  background-color: #120f13;
  font-family: 'Noto Sans', sans-serif;
  position: relative;
  h3 {
    color: #e0e0e0;
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
  h3 {
    margin-left: 10px;
  }
`;

export const AllChannelsHeader = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Channel = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
