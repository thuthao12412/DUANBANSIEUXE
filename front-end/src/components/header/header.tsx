// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Fruit Shop</h1>
            <nav>
                <Link to="/">Trang Chủ</Link>
                <Link to="/about">Giới Thiệu</Link>
                <Link to="/cart">Giỏ Hàng</Link>
                <Link to="/register">Đăng Ký</Link>
                <Link to="/login">Đăng Nhập</Link>
            </nav>
        </header>
    );
};

export default Header;
