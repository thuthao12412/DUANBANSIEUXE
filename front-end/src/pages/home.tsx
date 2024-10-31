// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <h2>Chào mừng đến với Cửa Hàng Trái Cây!</h2>
            <p>Chúng tôi cung cấp trái cây tươi ngon nhất mỗi ngày.</p>
            <Link to="/products">Khám Phá Sản Phẩm</Link>
        </div>
    );
};

export default Home;
