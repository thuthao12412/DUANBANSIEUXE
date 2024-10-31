// src/pages/Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeItemFromCart, updateQuantity } from '../stores/slices/cartSlide';

const Cart: React.FC = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className="cart-page">
            <h2>Giỏ Hàng</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn trống.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Giá: {item.price} VND</p>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
                                    }
                                />
                                <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
