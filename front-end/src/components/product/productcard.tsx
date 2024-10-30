// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
    name: string;
    price: number;
    imageUrl: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{price} VND</p>
            <button onClick={onAddToCart}>Thêm vào giỏ hàng</button>
        </div>
    );
};

export default ProductCard;
