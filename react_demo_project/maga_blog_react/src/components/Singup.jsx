
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import serviceInstance from '../appwrite/config'
import { useForm, SubmitHandler, set } from 'react-hook-form'
function Singup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const Singup = async (data) => {

        setError('')
        try {

            const userdata = await serviceInstance.createAccount(data)
            console.log("userdata", userdata);

            if (userdata) {

                const Userdata = await serviceInstance.getCurrentUser();

                console.log("Userdata", Userdata);
                

                if (Userdata) {
                    dispatch(authLogin({ userData: Userdata }))
                    navigate('/')
                }

            }


        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <div><Logo /></div>
            <p>Alrady have an account? <Link to="/login">login</Link></p>

            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit(Singup)}>
                <div>
                    <label htmlFor="fullname">fullname</label>
                    <Input label="fullname" placeholder="fullname" {...register('name', { required: true })} />

                    <Input label="email" placeholder="email" type="email" {...register('email', {
                        required: true, validate: { matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email format" }
                    })}
                    />

                    <Input label="password" placeholder="password" type="password" {...register('password', { required: true })} />


                    <Button type="submit">create account</Button>

                </div>

            </form>

        </div>
    )
}

export default Singup
