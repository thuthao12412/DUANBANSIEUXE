// src/pages/Products.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProducts, Product } from '../stores/slices/productsSlice';

const Products: React.FC = () => {
    const products = useSelector(selectProducts);

    return (
        <div className="products-page">
            <h2>Sản Phẩm</h2>
            <div className="product-list">
                {products.map((product: Product) => (
                    <Link to={`/products/${product.id}`} key={product.id} className="product-link">
                        <div className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Giá: {product.price} VND</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
