import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  categoriesLinks: null,
};

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addLinks: (state, action) => {
      state.categoriesLinks = [...action.payload];
    },
  },
});

export const { addLinks } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
