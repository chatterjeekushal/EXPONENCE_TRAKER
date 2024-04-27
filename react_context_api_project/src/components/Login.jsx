
import React,{useState,useContext} from 'react'

import UserContext from '../context/UserContext'

function Login() {

    const [myuser,setmyuser]=useState("")
    const [mypassword,setmypassword]=useState("")
    const [myjob,setmyjob]=useState("")

    const {setuser}=useContext(UserContext)
    const {setjob}=useContext(UserContext)

    const handelsubmit=(e)=>{

e.preventDefault()

setuser({myuser,mypassword})
setjob(myjob)

    }





  return (
    <div>

        <h2>login</h2>
        <input type='text' value={myuser} onChange={(e)=>{setmyuser(e.target.value)}} placeholder='username' />
        <input type='text' value={mypassword} onChange={(e)=>{setmypassword(e.target.value)}}  placeholder='password' />
        <input type='text' value={myjob} onChange={(e)=>{setmyjob(e.target.value)}}  placeholder='enter your job ' />

        <button onClick={handelsubmit}>submit</button>
    </div>
  )
}

export default Login