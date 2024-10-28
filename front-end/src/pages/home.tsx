// Home.tsx
import React from 'react';
import ProductList from '../components/product/productlist';
import NewsList from '../components/new/newlist';
import products from './products';
import news from './new';


/**
 * Trang chủ
 *
 * Hiển thị 4 sản phẩm nổi bật đầu tiên và 3 tin tức mới nhất
 */
const Home: React.FC = () => {
     // Kiểm tra xem products và news có phải là mảng không trước khi sử dụng slice
     const featuredProducts = Array.isArray(products) ? products.slice(0, 4) : [];
     const latestNews = Array.isArray(news) ? news.slice(0, 3) : [];
    return (
        <div>
            <h1>Trang Chủ</h1>
            <h2>Sản Phẩm Nổi Bật</h2>
            <ProductList products={featuredProducts} />
            <h2>Tin Tức Mới</h2>
            <NewsList news={latestNews} />
        </div>
    );
};

export default Home;
