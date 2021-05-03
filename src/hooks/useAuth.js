import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
const API = 'http://localhost:8080/auth/register';
const useAuth = () => {
  const [user, setUser] = useState(Cookies.get('user'));
  function userInCookies() {
    const userExists = Cookies.getJSON('user');
    if (!userExists) {
      return false;
    }
    return userExists;
  };

  const registerUser = async (user) => {
    const { name, photo, password } = user;
    try {
      const registeredUser = await axios.post(API, { name, photo, password }, { withCredentials: true });
      user.token = registeredUser.data.user.token
    } catch (err) {}
    setUser(user);
    return user;
  };

  return {
    userInCookies,
    registerUser,
    user,
  };
};

export default useAuth;
