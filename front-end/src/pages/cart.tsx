// src/pages/Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalQuantity, selectTotalPrice, removeItem } from '../stores/slices/cartSlide';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);

    const handleRemove = (id: number) => {
        dispatch(removeItem(id));
    };

    return (
        <div>
            <h2>Giỏ Hàng</h2>
            <p>Tổng số lượng: {totalQuantity}</p>
            <p>Tổng giá: {totalPrice} VND</p>
            {items.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>Giá: {item.price} VND</p>
                    <p>Số lượng: {item.quantity}</p>
                    <button onClick={() => handleRemove(item.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
