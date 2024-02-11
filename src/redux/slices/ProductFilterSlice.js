import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkedFilters: [],
  selectedFilters: [],
  selectedPrice: '',
  minPrice: 0,
  maxPrice: 0,
};

const ProductFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    addSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    toggleCheckedFilters: (state, action) => {
      const index = state.checkedFilters.indexOf(action.payload);
      if (index === -1) {
        state.checkedFilters.push(action.payload);
      } else {
        state.checkedFilters.splice(index, 1);
      }
    },
    addProductToFilter: (state, action) => {
      state.selectedFilters = action.payload;
      state.selectedFilters.push(state.selectedPrice);
    },
    removeProductFromFilter: (state, action) => {
      if (action.payload.includes('грн.')) {
        state.selectedPrice = '';
      }
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter !== action.payload,
      );
      state.checkedFilters = state.checkedFilters.filter(
        (filter) => filter !== action.payload,
      );
    },
    resetFilters: (state) => {
      state.checkedFilters = [];
      state.selectedFilters = [];
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const {
  addSelectedPrice,
  toggleCheckedFilters,
  addProductToFilter,
  removeProductFromFilter,
  resetFilters,
  setMinPrice,
  setMaxPrice,
} = ProductFilterSlice.actions;

export default ProductFilterSlice.reducer;
