import React, { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosClient.get('/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id: number) => {
    try {
      await axiosClient.delete(`/cart/${id}`);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
