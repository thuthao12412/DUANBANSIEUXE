// src/pages/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password === confirmPassword) {
            alert(`Đăng ký thành công với email: ${email}`);
        } else {
            alert('Mật khẩu xác nhận không khớp');
        }
    };

    return (
        <div className="register-page">
            <h2>Đăng Ký</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Mật khẩu:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <label>
                    Xác nhận mật khẩu:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>
                <button type="submit">Đăng Ký</button>
            </form>
        </div>
    );
};

export default Register;
