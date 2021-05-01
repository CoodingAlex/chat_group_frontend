import React from 'react'
import useInitialState from '../hooks/useInitialState'
import AppContext from '../context/AppContext'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import ModalAuth from '../components/ModalAuth'
import { HomeWrapper } from '../assets/styles/Home'

const Home = ({}) => {
  const initialState = useInitialState()
  const { user } = initialState
  return (
    <AppContext.Provider value={initialState}>
    <HomeWrapper>
        {!user && <ModalAuth/>}
      <Sidebar />
      <Chat />
    </HomeWrapper>
    </AppContext.Provider>
  )
}
export default Home


