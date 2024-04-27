
import React ,{useState} from 'react'



import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'


import UserContextprovider from './context/User_context_provider'


function App() {
  

  return (
    <UserContextprovider>

<Login/>

<Profile/>

    </UserContextprovider>
  )
}

export default App
