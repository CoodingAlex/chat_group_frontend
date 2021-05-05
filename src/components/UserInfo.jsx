import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { UserInfoStyled } from '../assets/styles/components/UserInfo';
const UserInfo = ({ setIsMenu }) => {
  const { user } = useContext(AppContext);
  return (
    <UserInfoStyled>
      <img src={user?.photo} alt="" />
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
