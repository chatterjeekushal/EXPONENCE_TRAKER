
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from '../store/authSlice'
import { Button, Input } from "./index"
import { useDispatch } from 'react-redux'
import authservice from "../appwright/auth"
import { useForm } from "react-hook-form"
function Login() {

    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handelsubmit } = useForm()
    const { error, setError } = useState("")

    const login = async (data) => {

        setError("")
        try {
            const session = await authservice.login(data)

            if (session) {
                const userdata = await authservice.getCurrentUser()

                if (userdata) dispatch(authLogin(userdata))

                Navigate("/")

            }

        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div>
<h2>sing in to your account</h2>
<p>dont have any account

<Link to="/signup">signup</Link>

</p>

{error &&<p>{error}</p>}

<form onSubmit={handelsubmit(login)}>

<div>
    <Input 
    label="email"
     placeholder="enter your email" 
     type="email" 
     {...register("email",{required:true,})} />
</div>

</form>

        </div>
    )
}

export default Login
