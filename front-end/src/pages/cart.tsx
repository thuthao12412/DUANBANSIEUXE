// src/pages/Cart.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../stores/slices/cartSlide';
import { selectProducts } from '../stores/slices/productsSlice';



const Cart: React.FC = () => {
    const cartItems = useSelector(selectCartItems);
    const products = useSelector(selectProducts);

    return (
        <div className="cart">
            <h2>Giỏ Hàng</h2>
            {cartItems.map(item => {
                const product = products.find(p => p.id === item.productId);
                return (
                    <div key={item.productId}>
                        <p>{product?.name} - Số lượng: {item.quantity}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
