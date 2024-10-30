// src/pages/Home.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../stores/slices/productsSlice';
import { addItemToCart } from '../stores/slices/cartSlide';
import ProductCard from '../components/product/productcard';

const Home: React.FC = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    onAddToCart={() => dispatch(addItemToCart(product.id))}
                />
            ))}
        </div>
    );
};

export default Home;
