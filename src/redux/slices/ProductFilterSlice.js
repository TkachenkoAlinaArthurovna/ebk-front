import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkedFilters: [],
  selectedFilters: [],
  selectedPrice: [],
  minPrice: [],
  maxPrice: [],
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
  addSelectedPrice,
  toggleCheckedFilters,
  addProductToFilter,
  removeProductFromFilter,
  resetFilters,
  setMinPrice,
  setMaxPrice,
} = ProductFilterSlice.actions;

export default ProductFilterSlice.reducer;
