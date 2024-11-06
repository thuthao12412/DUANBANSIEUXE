import React from 'react';
import { useSelector } from 'react-redux';
import FruitCard from '../components/fruitCard';
import CustomerReview from '../components/customerReview';
import { RootState } from '../stores/store';

const Home: React.FC = () => {
  // Lấy dữ liệu sản phẩm và đánh giá từ Redux store
  const fruits = useSelector((state: RootState) => state.products.items);
  const reviews = useSelector((state: RootState) => state.reviews.list);

  return (
    <div className="home">
      {/* Phần banner giới thiệu */}
      <section className="intro-banner">
        <div className="banner-content">
          <h1>Chào Mừng Bạn Đến Với Cửa Hàng Trái Cây Tươi</h1>
          <p>Chúng tôi mang đến cho bạn các loại trái cây tươi ngon, đảm bảo chất lượng và an toàn.</p>
          <button className="shop-now-button">Mua Ngay</button>
        </div>
      </section>

      {/* Phần trái cây nổi bật */}
      <section className="highlighted-fruits">
        <h2>Trái Cây Nổi Bật</h2>
        <div className="fruit-list">
          {fruits.slice(0, 4).map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} />
          ))}
        </div>
      </section>

      {/* Phần khuyến mãi */}
      <section className="promotions">
        <h2>Chương Trình Khuyến Mãi</h2>
        <p>Giảm giá 20% cho tất cả các loại trái cây tươi trong tuần này! Đừng bỏ lỡ cơ hội nhận ưu đãi lớn này.</p>
        <button className="promo-button">Xem Khuyến Mãi</button>
      </section>

      {/* Phần bộ sưu tập trái cây theo mùa */}
      <section className="seasonal-collection">
        <h2>Bộ Sưu Tập Theo Mùa</h2>
        <p>Khám phá các loại trái cây đặc biệt chỉ có trong mùa này, từ các loại trái cây nhiệt đới đến các loại trái cây ôn đới.</p>
        <div className="fruit-list">
          {fruits
            .filter(fruit => fruit.isSeasonal) // Chỉ lấy trái cây theo mùa (nếu có thuộc tính `isSeasonal`)
            .map(fruit => (
              <FruitCard key={fruit.id} fruit={fruit} />
          ))}
        </div>
      </section>

      {/* Phần đánh giá khách hàng */}
      <section className="customer-reviews">
        <h2>Đánh Giá Khách Hàng</h2>
        <div className="reviews-list">
          {reviews.slice(0, 3).map((review, index) => (
            <CustomerReview key={index} review={review} />
          ))}
        </div>
      </section>

      {/* Phần thông tin về dịch vụ */}
      <section className="service-info">
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <p>Chúng tôi cam kết mang đến cho bạn những sản phẩm trái cây tươi ngon nhất, được nhập khẩu và bảo quản cẩn thận, an toàn cho sức khỏe.</p>
        <ul>
          <li>Trái cây 100% tự nhiên, không hóa chất</li>
          <li>Giao hàng nhanh chóng trong ngày</li>
          <li>Chăm sóc khách hàng tận tình</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
