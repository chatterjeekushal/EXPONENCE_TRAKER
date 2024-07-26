
import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwright/config'
import { logout } from '../../store/authSlice'

function Logoutbtn() {

    const dispatch=useDispatch()

    const logouthandaler=()=>{

        authservice.logout().then(()=>{

            dispatch(logout())
        })
    }

  return (
   <button onClick={logouthandaler}>logout btn</button>
  )
}

export default Logoutbtn
