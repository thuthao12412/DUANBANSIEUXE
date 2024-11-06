// Header.tsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="top-bar">
        <span>Hotline: <FontAwesomeIcon icon={faPhone} /> 0834 70 11 55</span>
        <span>Social Links</span>
      </div>
      <div className="nav-bar">
        <div className="logo">Fruit Store</div>
        <div className="nav-links">
          <a href="#">Giới Thiệu</a>
          <a href="#">Sản Phẩm</a>
          <a href="#">Tin Tức</a>
          <a href="#">Hệ Thống Bán Hàng</a>
          <a href="#">Liên Hệ</a>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
