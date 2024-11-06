// src/redux/slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  info: {
    name: string;
    email: string;
  } | null;
  orderHistory: Array<{ id: string; date: string; total: number }>;
}

const initialState: UserState = {
  info: null,
  orderHistory: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ name: string; email: string }>) {
      state.info = action.payload;
    },
    clearUserInfo(state) {
      state.info = null;
      state.orderHistory = [];
    },
    setOrderHistory(state, action: PayloadAction<Array<{ id: string; date: string; total: number }>>) {
      state.orderHistory = action.payload;
    },
  },
});

export const { setUserInfo, clearUserInfo, setOrderHistory } = userSlice.actions;
export default userSlice.reducer;
export {};
