import styled from 'styled-components';

export const UserInfoStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  background: #0b090c;
`;

export const UserPhoto = styled.img`
  max-height: 32px;
  max-width: 32px;
`;

export const OpenMenuIcon = styled.i`
  cursor: pointer;
 `
export const UserInfoMenuStyled = styled.div`
  display: ${(props) => (props.isMenu ? 'block' : 'none')};
  background: #252329;
  padding: 10px;
  height: fit-content;
  width: 50%;
  position: absolute;
  bottom: 10%;
  right: 5%;
  font-size: 12px;
  border-radius: 3px;
`;

export const MenuOptions = styled.ul`
  list-style: none;
`;

export const Option = styled.li`
  height: 20px;
  border-radius: 3px;
  padding-left: 5px;
  :hover {
    background: #3c393f;
  }
`;
