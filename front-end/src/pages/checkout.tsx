// src/pages/Checkout.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../stores/slices/cartSlide';
import { selectProducts } from '../stores/slices/productsSlice';

const Checkout: React.FC = () => {
    const cartItems = useSelector(selectCartItems);
    const products = useSelector(selectProducts);
    const total = cartItems.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const handleCheckout = () => {
        alert("Đơn hàng của bạn đã được đặt!");
    };

    return (
        <div className="checkout">
            <h2>Thanh Toán</h2>
            {cartItems.map(item => {
                const product = products.find(p => p.id === item.productId);
                return (
                    <div key={item.productId}>
                        <p>{product?.name} - Số lượng: {item.quantity}</p>
                    </div>
                );
            })}
            <p>Tổng cộng: {total} VND</p>
            <button onClick={handleCheckout}>Hoàn tất đơn hàng</button>
        </div>
    );
};

export default Checkout;
