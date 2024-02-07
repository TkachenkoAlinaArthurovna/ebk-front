import { configureStore } from '@reduxjs/toolkit';
import CategoriesSlice from '@/redux/slices/CategoriesSlice';
import ProductFilterSlice from '@/redux/slices/ProductFilterSlice';
import MinMaxFilterPriceSlice from '@/redux/slices/MinMaxFilterPriceSlice';

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    productFilter: ProductFilterSlice,
    minMaxFilterPrice: MinMaxFilterPriceSlice,
  },
});
