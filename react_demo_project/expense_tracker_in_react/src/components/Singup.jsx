import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../features/tranjasan/Tranjasan';
import { useForm } from 'react-hook-form';
import authservice from '../appwrite/auth';
import { TextField, Button } from '@mui/material';

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
        (
            <div className="max-w-md mx-auto p-4">

                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

                <form onSubmit={handleSubmit(signup)} className="space-y-4">
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        {...register('fullname', { required: true })}
                        className="border border-gray-300"
                    />
    
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        {...register('email', { required: true })}
                        className="border border-gray-300"
                    />
    
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        {...register('password', { required: true })}
                        className="border border-gray-300"
                    />
    
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="w-full"
                    >
                        Create Account
                    </Button>
    
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        )    
    );
}

export default Signup;
