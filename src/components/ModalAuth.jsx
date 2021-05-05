import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import {
  ModalContainer,
  ModalInput,
  ModalButton,
  AddChannelModal,
  RegisterToggle,
} from '../assets/styles/components/Modal';
import { set } from 'js-cookie';
const ModalAuth = () => {
  const { registerUser, login } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Toggle for register/login
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const handleClick = async (e) => {
    setError('');
    try {
      const user = {
        name: username,
        password,
        photo: '',
      };
      if (isRegister) {
        const response = await registerUser(user);
        if (response.err) {
          throw new Error(response.err);
        }
        return;
      }
      const response = await login(username, password);

      setPassword('');
      setUsername('');
      if (response.error) {
        throw new Error(response.err);
      }
    } catch (err) {
      const isUnauthorized = err.message.match(/401/);
      if (isUnauthorized) {
        if (isRegister) {
          setError('That username already exists');
        } else {
          setError('Username or password incorrect');
        }
      }
    }
  };
  return (
    <ModalContainer>
      <AddChannelModal>
        <h3>Hey! it looks that youre not logged 😱</h3>
        <label htmlFor="username-input">Username</label>
        <ModalInput
          placeholder="Username"
          id="username-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password-input">Password</label>
        <ModalInput
          placeholder="Password"
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterToggle
          onClick={() => {
            setIsRegister(!isRegister);
            setError('');
          }}
        >
          {isRegister
            ? 'You already have an account? Login'
            : 'You dont have an account? Register'}
        </RegisterToggle>
        <p>{error}</p>
        <ModalButton onClick={(e) => handleClick()}>
          {isRegister ? 'Register' : 'Log In'}
        </ModalButton>
      </AddChannelModal>
    </ModalContainer>
  );
};

export default ModalAuth;
