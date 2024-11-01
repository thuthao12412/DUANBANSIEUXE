// src/pages/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Đăng nhập thành công cho tài khoản ${email}`);
        // Thêm logic đăng nhập, ví dụ như xác thực người dùng từ backend hoặc Redux
    };

    return (
        <div className="auth-page">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
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
