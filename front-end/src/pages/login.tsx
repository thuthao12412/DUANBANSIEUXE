import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth, googleProvider, facebookProvider } from '../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import axiosClient from '../api/axiosClient';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/users/login', { email, password });
      const { token, userId, userName } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userName', userName);
      navigate('/account');
    } catch (error) {
      setError('Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem('authToken', await user.getIdToken());
      localStorage.setItem('userName', user.displayName || '');
      navigate('/account');
    } catch (error) {
      setError('Đăng nhập bằng Google không thành công. Vui lòng thử lại.');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      localStorage.setItem('authToken', await user.getIdToken());
      localStorage.setItem('userName', user.displayName || '');
      navigate('/account');
    } catch (error) {
      setError('Đăng nhập bằng Facebook không thành công. Vui lòng thử lại.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Bạn mới ở đây?</h2>
        <p>Đăng ký để khám phá thêm nhiều tính năng thú vị!</p>
        <Link to="/register" className="register-button">Đăng Ký</Link>
      </div>

      <div className="login-right">
        <h2>Đăng Nhập</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="signin-button">Đăng Nhập</button>
        </form>

        <p className="social-text">Hoặc đăng nhập bằng các nền tảng xã hội</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faGoogle} className="social-icon" onClick={handleGoogleLogin} />
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" onClick={handleFacebookLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
