import React,{useContext,useState} from 'react'

import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)
    const {job}=useContext(UserContext)

    if (!user) return <div> plese login </div> 

    return <div> welcome {user.myuser}  my job {job} mypassword {user.mypassword} </div>

}

export default Profile