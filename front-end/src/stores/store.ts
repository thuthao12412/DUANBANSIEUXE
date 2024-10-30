// src/stores/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlide';
import productsReducer from './slices/productsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
