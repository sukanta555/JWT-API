import React, { useState } from 'react';
import { login } from '../services/apiService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        const data = await login(email, password);
        console.log('Login successful:', data);
        // Handle successful login (e.g., store token, redirect, etc.)
        } catch (err) {
        setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;
