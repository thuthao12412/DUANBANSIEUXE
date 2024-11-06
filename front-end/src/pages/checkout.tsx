import React, { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/checkout', { address, phone });
      if (response.status === 200) {
        navigate('/account/orders');
      }
    } catch (error) {
      setError('Thanh toán không thành công. Vui lòng thử lại.');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Thanh Toán</h1>
      {error && <p className="error-message">{error}</p>}
      <form className="checkout-form" onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Địa chỉ nhận hàng"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className="checkout-button">Xác Nhận Đặt Hàng</button>
      </form>
    </div>
  );
};

export default Checkout;
