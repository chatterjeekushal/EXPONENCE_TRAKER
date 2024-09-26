
import React, { useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import serviceInstance from '../appwrite/config'
import { useForm, SubmitHandler } from 'react-hook-form'
function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const Login = async (data) => {
        console.log("data", data);

        setError('')
        try {
            const session = await serviceInstance.login(data)
            console.log("session", session);

            if (session) {
                const userdata = await serviceInstance.getCurrentUser()
                console.log("userdata", userdata);

                if (userdata) {
                    dispatch(authLogin({ userData: userdata }))

                    navigate('/')
                }
            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <div>
                <div><Logo /></div>
            </div>
            <h2>sing in your account</h2>
            <p>dont have an account? <Link to="/signup">signup</Link></p>
            {error && <p className='text-red-500'>{error}</p>}

            <form onSubmit={handleSubmit(Login)}>
                <div>
                    <Input
                        label="email"
                        placeholder="email"
                        type="email"
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format"
                            }
                        })}
                    />

                    <Input
                        label="password"
                        placeholder="password"
                        type="password"
                        {...register('password', {
                            required: true
                        })}
                    />


                </div>
                <Button type="submit" bgcolor="bg-blue-600">login</Button>
            </form>
        </div>
    )
}

export default Login
