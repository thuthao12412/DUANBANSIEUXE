// ProductCard.tsx
import React from 'react';
import { Product } from '../../config/product.data';

interface ProductCardProps {
    product: Product;
}

const productCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Giá: {product.price} VND</p>
            <button>Mua ngay</button>
        </div>
    );
};

export default productCard;
