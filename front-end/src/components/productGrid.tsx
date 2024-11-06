// ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const products = [
    { id: 1, name: "Dưa Lưới Đài Loan", price: 90000, salePrice: 125000, inStock: true },
    { id: 2, name: "Táo Fuji Mini Nam Phi Túi 3kg", price: 230000, inStock: false },
    // Add more products here
  ];

  return (
    <section className="product-grid-container">
      <h2 className="grid-title">Trái Cây Nhập Khẩu</h2>
      <div className="grid-wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
