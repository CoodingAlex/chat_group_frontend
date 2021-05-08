import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  UserInfoStyled,
  UserPhoto,
} from '../assets/styles/components/UserInfo';
const UserInfo = ({ setIsMenu }) => {
  const { user } = useContext(AppContext);
  return (
    <UserInfoStyled>
      <UserPhoto src={user?.photo} alt="" />
      <p>{user?.name}</p>
      <button
        onClick={() => {
          setIsMenu((prev) => !prev);
        }}
      >
        menu
      </button>
    </UserInfoStyled>
  );
};

export default UserInfo;
