import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  UserInfoMenuStyled,
  MenuOptions,
  Option,
} from '../assets/styles/components/UserInfo';

const UserInfoMenu = ({ isMenu }) => {
  const { logout, disconnect } = useContext(AppContext);
  return (
    <UserInfoMenuStyled isMenu={isMenu}>
      <MenuOptions>
        <Option
          onClick={async () => {
            await logout();
            disconnect();
          }}
        >
          logout
        </Option>
      </MenuOptions>
    </UserInfoMenuStyled>
  );
};

export default UserInfoMenu;
