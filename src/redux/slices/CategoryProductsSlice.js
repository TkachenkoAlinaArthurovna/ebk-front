import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryProducts: [],
};

const CategoryProductsSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {
    setCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
  },
});

export const { setCategoryProducts } = CategoryProductsSlice.actions;
export default CategoryProductsSlice.reducer;
