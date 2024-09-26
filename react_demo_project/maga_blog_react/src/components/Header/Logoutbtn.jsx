
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'  
import authservice from '../../appwrite/auth'
function Logoutbtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {

        authservice.logout()
        .then(() => {
            dispatch(logout())
        })
    }

  return (
    <button>Logout</button>
  )
}

export default Logoutbtn
