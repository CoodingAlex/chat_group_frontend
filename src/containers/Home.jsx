import React from 'react'
import useInitialState from '../hooks/useInitialState'
import AppContext from '../context/AppContext'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

import { HomeWrapper } from '../assets/styles/Home'

const Home = ({}) => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
    <HomeWrapper>
      <Sidebar />
      <Chat />
    </HomeWrapper>
    </AppContext.Provider>
  )
}
export default Home


