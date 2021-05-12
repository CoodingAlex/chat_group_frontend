import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
const API = 'https://chat-gruop.herokuapp.com/auth';
const useAuth = () => {
  const [user, setUser] = useState();

  function userInCookies() {
    const userExists = Cookies.getJSON('user');
    if (!userExists) {
      return false;
    }
    return userExists;
  }

  const login = async (username, password) => {
    const token = userInCookies();
    if (token) {
      const loggedUser = await axios.post(
        `${API}/verify-token`,
        {},
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      setUser({ ...loggedUser.data, token });
      return;
    }
    try {
      const loggedUser = await axios.post(
        `${API}/sign-in`,
        {},
        {
          auth: {
            username,
            password,
          },
          withCredentials: true,
        }
      );

      setUser(loggedUser.data);
    } catch (err) {
      return { err };
    }
  };
  const logout = async () => {
    const response = await axios.post(
      `${API}/sign-out`,
      {},
      { withCredentials: true }
    );

    setUser(undefined);
  };
  //TODO: Refactor this
  const registerUser = async (user) => {
    const { name, photo, password } = user;
    try {
      const registeredUser = await axios.post(
        `${API}/register`,
        { name, photo, password },
        { withCredentials: true }
      );
      user.token = registeredUser.data.user.token;
    } catch (err) {
      return { err };
    }
    setUser(user);
    return user;
  };

  return {
    userInCookies,
    registerUser,
    user,
    login,
    logout,
  };
};

export default useAuth;
