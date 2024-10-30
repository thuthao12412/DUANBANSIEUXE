// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import About from './pages/about';
import ProductDetail from './pages/productDetail';
import Register from './pages/register';
import Login from './pages/login';
import Checkout from './pages/checkout';
import Header from './components/header/header';
import './App.css';


const App: React.FC = () => {
    return (
      <>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            </>
    );
};

export default App;
