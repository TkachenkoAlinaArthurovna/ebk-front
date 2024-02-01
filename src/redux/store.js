import { configureStore } from '@reduxjs/toolkit';
import CategoriesSlice from '@/redux/slices/CategoriesSlice';

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
  },
});
