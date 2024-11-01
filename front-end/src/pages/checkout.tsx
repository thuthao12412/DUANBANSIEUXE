// src/pages/Checkout.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalPrice, clearCart } from '../stores/slices/cartSlide';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    const handleConfirmOrder = () => {
        dispatch(clearCart());
        alert('Đơn hàng của bạn đã được đặt thành công!');
        navigate('/');
    };

    return (
        <div>
            <h2>Thanh Toán</h2>
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>Giá: {item.price} VND</p>
                        <p>Số lượng: {item.quantity}</p>
                    </div>
                ))}
                <h3>Tổng tiền: {totalPrice} VND</h3>
                <button onClick={handleConfirmOrder}>Xác Nhận Đặt Hàng</button>
            </div>
        </div>
    );
};

export default Checkout;
