import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Login from './pages/login';
import Register from './pages/register';
import UserAccount from './pages/userAccount';
import Header from './components/header';
import Footer from './components/footer';
import PrivateRoute from './components/privateRoute';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={
            <PrivateRoute>
              <UserAccount />
            </PrivateRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
