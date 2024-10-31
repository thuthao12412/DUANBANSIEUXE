// src/pages/Checkout.tsx
import React, { useState } from 'react';

const Checkout: React.FC = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleOrder = () => {
        alert(`Đặt hàng thành công! Họ tên: ${name}, Địa chỉ: ${address}, Số điện thoại: ${phone}`);
    };

    return (
        <div className="checkout-page">
            <h2>Thông Tin Thanh Toán</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleOrder(); }}>
                <label>
                    Họ và tên:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Địa chỉ:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    Số điện thoại:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <button type="submit">Xác Nhận Đặt Hàng</button>
            </form>
        </div>
    );
};

export default Checkout;
