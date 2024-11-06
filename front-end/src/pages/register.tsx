import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/users/register', { name, email, password });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      setError('Đăng ký không thành công. Vui lòng thử lại.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Bạn đã có tài khoản?</h2>
        <p>Đăng nhập để tiếp tục trải nghiệm!</p>
        <Link to="/login" className="login-button">Đăng Nhập</Link>
      </div>

      <div className="register-right">
        <h2>Đăng Ký</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="register-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Tên người dùng" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="register-button">Đăng Ký</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
