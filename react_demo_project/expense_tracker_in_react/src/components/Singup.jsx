
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../features/tranjasan/Tranjasan'
import { useForm, SubmitHandler, set } from 'react-hook-form'
import authservice from '../appwrite/auth'

function Singup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()
    const singup = async (data) => {

        setError('')

        try {
            const userdata = await authservice.createAccount({ email: data.email, password: data.password, name: data.fullname })

            console.log("userdata", userdata);

            if (userdata) {

                const Userdata = await authservice.getCurrentUser()

                console.log("Userdata", Userdata);

                if (Userdata) {

                    dispatch(authLogin({ userData: Userdata }))

                    navigate('/user-page')
                }
            }
        } catch (error) {

            setError(error.message)
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit(singup)}>

                <label htmlFor="">fullname</label>
                <input type="text" name="fullname" id="fullname" placeholder='fullname' {...register('fullname', { required: true })} />

                <input type="email" name="email" id="email" placeholder='email' {...register('email', { required: true })} />

                <input type="password" name="password" id="password" placeholder='password' {...register('password', { required: true })} />

                <Button type="submit">create account</Button>

            </form>

        </div>
    )
}

export default Singup
