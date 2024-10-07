import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../features/tranjasan/Tranjasan';
import { useForm } from 'react-hook-form';
import authservice from '../appwrite/auth';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const signup = async (data) => {
        setError('');

        try {
            const userdata = await authservice.createAccount({
                email: data.email,
                password: data.password,
                name: data.fullname,
            });

            console.log("userdata", userdata);

            if (userdata) {
                const Userdata = await authservice.getCurrentUser();

                console.log("Userdata", Userdata);

                if (Userdata) {
                    dispatch(authLogin({ userData: Userdata }));
                    navigate('/user-page');
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(signup)}>
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder='Full Name'
                    {...register('fullname', { required: true })}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Email'
                    {...register('email', { required: true })}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Password'
                    {...register('password', { required: true })}
                />

                <button type="submit">Create Account</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default Signup;
