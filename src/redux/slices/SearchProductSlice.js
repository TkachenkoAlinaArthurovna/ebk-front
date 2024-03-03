import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchedProducts: [],
  serchValue: '',
};

const SearchedProducts = createSlice({
  name: 'searchedProducts',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.serchValue = action.payload;
    },
    setSearchedProducts(state, action) {
      state.searchedProducts = action.payload;
    },
    cleareSearchedProducts(state, action) {
      state.searchedProducts = [];
    },
  },
});
export const { setSearchedProducts, cleareSearchedProducts, setSearchValue } = SearchedProducts.actions;
export default SearchedProducts.reducer;
