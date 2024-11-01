// src/App.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import { selectCartItems } from './stores/slices/cartSlide';
import Login from './pages/login';
import Register from './pages/register';
import './App.css';
import Contact from './pages/contact';

const App: React.FC = () => {
    // Sử dụng useSelector để lấy các sản phẩm trong giỏ
    const cartItems = useSelector(selectCartItems);
    
    // Tính tổng số lượng sản phẩm
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Router>
            <header>
                <nav>
                    <Link to="/">Trang Chủ</Link>
                    <Link to="/products">Sản Phẩm</Link>
                    {/* Hiển thị tổng số lượng sản phẩm trong giỏ */}
                    <Link to="/cart">Giỏ Hàng ({totalQuantity})</Link>
                    <Link to="/checkout">Thanh Toán</Link>
                    <Link to="/contact">Liên Hệ</Link>
                    <Link to="/register">Đăng Ký</Link>
                    <Link to="/login">Đăng Nhập</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
