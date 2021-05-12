import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  UserInfoStyled,
  UserPhoto,
  OpenMenuIcon,
} from '../assets/styles/components/UserInfo';
const UserInfo = ({ setIsMenu }) => {
  const { user } = useContext(AppContext);
  return (
    <UserInfoStyled>
      <UserPhoto src={user?.photo} alt="" />
      <p>{user?.name}</p>
      <OpenMenuIcon
        className="fas fa-sort-up"
        onClick={() => {
          setIsMenu((prev) => !prev);
        }}
      ></OpenMenuIcon>
    </UserInfoStyled>
  );
};

export default UserInfo;
