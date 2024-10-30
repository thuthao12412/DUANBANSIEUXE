// src/pages/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Xử lý đăng nhập người dùng
        alert(`Đăng nhập thành công cho người dùng: ${username}`);
    };

    return (
        <div className="login">
            <h2>Đăng Nhập</h2>
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
            <button onClick={handleLogin}>Đăng Nhập</button>
        </div>
    );
};

export default Login;
