// src/pages/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Xử lý đăng ký người dùng
        alert(`Đăng ký thành công cho người dùng: ${username}`);
    };

    return (
        <div className="register">
            <h2>Đăng Ký</h2>
            <input 
                type="text" 
                placeholder="Tên đăng nhập" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Mật khẩu" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleRegister}>Đăng Ký</button>
        </div>
    );
};

export default Register;
