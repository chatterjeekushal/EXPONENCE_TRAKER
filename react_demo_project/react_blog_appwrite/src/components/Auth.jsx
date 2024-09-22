import React, { useState } from 'react';
import { account, databases } from '../appwrite/appwrite';
import { ID } from 'appwrite';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [author, setAuthor] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isRegister) {
                // Register user
                const user_data = await account.create('unique()', email, password, author);
                console.log(user_data);

                // Create user document in the database
                await databases.createDocument(
                    '66ee994d002ebf863125', // Database ID
                    '66ee995f000da57d6840', // Collection ID
                    ID.unique(),
                    { 
                       user_data// Include the required author_email attribute
                    } 
                );
            } else {
                // Login user
                await account.createSession(email, password);
            }
        } catch (error) {
            console.error('Authentication error:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleAuth}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                {isRegister && (
                    <input 
                        type="text" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        placeholder="Name" 
                        required 
                    />
                )}
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
                <button 
                    type="button" 
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? 'Already have an account?' : 'Create an account'}
                </button>
            </form>
        </div>
    );
}

export default Auth;
