// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, Product } from '../stores/slices/productsSlice';
import { addItemToCart } from '../stores/slices/cartSlide';

const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    const product = products.find((p) => p.id === parseInt(productId || '0'));

    if (!product) {
        return <p>Không tìm thấy sản phẩm.</p>;
    }

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Giá: {product.price} VND</p>
            <button onClick={() => dispatch(addItemToCart(product))}>
                Thêm vào giỏ hàng
            </button>
        </div>
    );
};

export default ProductDetail;
