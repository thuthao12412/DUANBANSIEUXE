// reviewsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Review {
  id: string;
  comment: string;
  customerName: string;
  rating: number;
}

interface ReviewsState {
  list: Review[];
}

const initialState: ReviewsState = {
  list: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<Review[]>) {
      state.list = action.payload;
    },
  },
});

export const { setReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
