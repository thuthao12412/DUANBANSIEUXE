// src/redux/slices/productsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface Fruit {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductsState {
  items: Fruit[];
  status: string;
}

const initialState: ProductsState = {
  items: [], // ban đầu là một mảng trống
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
