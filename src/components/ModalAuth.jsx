import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'
import { ModalContainer, ModalInput, ModalButton, AddChannelModal } from "../assets/styles/components/Modal";
const ModalAuth = () => {
    const { registerUser } = useContext(AppContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleClick = e => {
        const user = {
            name: username,
            password,
            photo: ''
        }

        registerUser(user)
    }
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
                <ModalButton onClick={(e) => handleClick()}>Log In</ModalButton>
            </AddChannelModal>
        </ModalContainer>
    );
}

export default ModalAuth;
