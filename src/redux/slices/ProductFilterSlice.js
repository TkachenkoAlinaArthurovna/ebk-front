import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: '',
  checkedFilters: [],
  selectedFilters: [],
  selectedPrice: {},
  minPrice: [],
  maxPrice: [],
};

const ProductFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    addCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    addSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    toggleCheckedFilters: (state, action) => {
      const existingIndex = state.checkedFilters.findIndex(
        (filter) => JSON.stringify(filter) === JSON.stringify(action.payload),
      );

      if (existingIndex === -1) {
        state.checkedFilters.push(action.payload);
      } else {
        state.checkedFilters.splice(existingIndex, 1);
      }
    },
    addProductToFilter: (state, action) => {
      state.selectedFilters = [];
      state.selectedFilters = [...action.payload];
      state.selectedFilters.push(state.selectedPrice);
    },
    removeProductFromFilter: (state, action) => {
      if (action.payload.paramValue.includes('грн.')) {
        state.selectedPrice = '';
      }
      state.checkedFilters = state.checkedFilters.filter(
        (filter) => filter.paramValue !== action.payload.paramValue,
      );
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter.paramValue !== action.payload.paramValue,
      );
    },
    resetFilters: (state) => {
      state.checkedFilters = [];
      state.selectedFilters = [];
      state.selectedPrice = [];
    },
    setMinPrice: (state, action) => {
      const objectIndex = state.minPrice.findIndex(
        (item) => item.category === action.payload.category,
      );
      if (objectIndex !== -1) {
        state.minPrice[objectIndex].value = action.payload.value;
      } else {
        state.minPrice.push(action.payload);
      }
    },
    setMaxPrice: (state, action) => {
      const objectIndex = state.maxPrice.findIndex(
        (item) => item.category === action.payload.category,
      );
      if (objectIndex !== -1) {
        state.maxPrice[objectIndex].value = action.payload.value;
      } else {
        state.maxPrice.push(action.payload);
      }
    },
  },
});

export const {
  addCategoryId,
  addSelectedPrice,
  toggleCheckedFilters,
  addProductToFilter,
  removeProductFromFilter,
  resetFilters,
  setMinPrice,
  setMaxPrice,
} = ProductFilterSlice.actions;

export default ProductFilterSlice.reducer;
