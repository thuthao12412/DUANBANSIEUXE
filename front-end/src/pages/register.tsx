// src/pages/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Tài khoản ${username} đã được tạo thành công.`);
        // Thêm logic đăng ký, như lưu vào database hoặc Redux
    };

    return (
        <div className="auth-page">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleRegister}>
                <label>
                    Tên đăng nhập:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Mật khẩu:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Đăng Ký</button>
            </form>
        </div>
    );
};

export default Register;
