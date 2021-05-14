import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import {
  ModalContainer,
  ModalInput,
  ModalButton,
  AddChannelModal,
  RegisterToggle,
} from '../assets/styles/components/Modal';
const ModalAuth = () => {
  const { registerUser, login, isLoading, setIsLoading } =
    useContext(AppContext);
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  //Toggle for register/login
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const handleClick = async (e) => {
    console.log(isLoading);
    if (isLoading) {
      console.log('not loading');
      return;
    }
    console.log('loading');
    setIsLoading(true);
    setError('');
    try {
      const user = {
        name: username,
        password,
        photo,
      };
      if (isRegister) {
        const response = await registerUser(user);
        setIsLoading(false);
        if (response.err) {
          throw new Error(response.err);
        }
        return;
      }
      const response = await login(username, password);
      setPassword('');
      setUsername('');
      setPhoto('');
      setIsLoading(false);
      console.log('logged');
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
        setIsLoading(false);
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
        {isRegister && (
          <>
            <label htmlFor="photo-input">Photo</label>
            <ModalInput
              placeholder="Photo"
              id="photo-input"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </>
        )}

        <label htmlFor="password-input">Password</label>
        <ModalInput
          placeholder="Password"
          id="password-input"
          value={password}
          type="password"
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
