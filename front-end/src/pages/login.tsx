// src/pages/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Đăng nhập thành công với email: ${email}`);
    };

    return (
        <div className="login-page">
            <h2>Đăng Nhập</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Mật khẩu:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Đăng Nhập</button>
            </form>
        </div>
    );
};

export default Login;
