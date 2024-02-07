import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFilters: [],
  selectedPrice: null,
};

const ProductFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    addProductToFilter: (state, action) => {
      state.selectedFilters.push(action.payload);
      state.selectedPrice = action.payload;
    },
    removeProductFromFilter: (state, action) => {
      state.selectedFilters = state.selectedFilters.filter(filter => filter !== action.payload);
    },
    resetFilters: state => {
      state.selectedFilters = [];
      state.selectedPrice = null;
    },
  },
});

export const { addProductToFilter, removeProductFromFilter, resetFilters } = ProductFilterSlice.actions;
export default ProductFilterSlice.reducer;
