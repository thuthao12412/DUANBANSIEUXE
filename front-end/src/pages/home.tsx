import React from 'react';
import ProductList from '../components/product/productlist';
import NewsList from '../components/new/newlist';
import CategoryList from '../components/category/categorylist'; // New component for categories
import Testimonials from '../components/testimonials/testimonials'; // New component for testimonials
import products from './products';
import news from './new';
import categories from './categories'; // Assuming you have categories data
import './Home.css'; // Import CSS for styling

/**
 * Trang chủ
 *
 * Hiển thị 4 sản phẩm nổi bật đầu tiên, 3 tin tức mới nhất,
 * danh sách thể loại và các đánh giá từ khách hàng.
 */
const Home: React.FC = () => {
    // Kiểm tra xem products và news có phải là mảng không trước khi sử dụng slice
    const featuredProducts = Array.isArray(products) ? products.slice(0, 4) : [];
    const latestNews = Array.isArray(news) ? news.slice(0, 3) : [];
    const categoryList = Array.isArray(categories) ? categories : [];

    return (
        <div className="home-container">
            <h1>Trang Chủ</h1>

            <h2>Sản Phẩm Nổi Bật</h2>
            <ul className="product-list">
                {featuredProducts.map((product, index) => (
                    <li key={index} className="product-item">
                        <ProductList product={product} />
                    </li>
                ))}
            </ul>

            <h2>Tin Tức Mới</h2>
            <ul className="news-list">
                {latestNews.map((newsItem, index) => (
                    <li key={index} className="news-item">
                        <NewsList news={newsItem} />
                    </li>
                ))}
            </ul>

            <h2>Danh Mục Sản Phẩm</h2>
            <ul className="category-list">
                {categoryList.map((category, index) => (
                    <li key={index} className="category-item">
                        <CategoryList category={category} />
                    </li>
                ))}
            </ul>

            <h2>Đánh Giá Khách Hàng</h2>
            <div className="testimonials-section">
                <Testimonials />
            </div>

            <h2>Ưu Đãi Đặc Biệt</h2>
            <div className="special-offers">
                <p>Đừng bỏ lỡ các ưu đãi đặc biệt của chúng tôi! Kiểm tra các sản phẩm giảm giá ngay hôm nay!</p>
                {/* You can add more details or components for special offers here */}
            </div>
        </div>
    );
};

export default Home;
