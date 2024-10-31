// src/slices/productsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductsState {
    items: Product[];
}

const initialState: ProductsState = {
    items: [
        { id: 1, name: "Táo", price: 30000, imageUrl: "/assets/apple.jpg" },
        { id: 2, name: "Cam", price: 40000, imageUrl: "/assets/orange.jpg" },
        { id: 3, name: "Chuối", price: 20000, imageUrl: "/assets/banana.jpg" },
        // Thêm sản phẩm khác tùy ý
    ],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export const selectProducts = (state: { products: ProductsState }) => state.products.items;

export default productsSlice.reducer;
