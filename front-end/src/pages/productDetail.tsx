// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../stores/slices/productsSlice';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const products = useSelector(selectProducts);
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <p>Không tìm thấy sản phẩm!</p>;
    }

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Giá: {product.price} VND</p>
            <button>Thêm vào giỏ hàng</button>
        </div>
    );
};

export default ProductDetail;
