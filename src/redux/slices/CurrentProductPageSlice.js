import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProduct: {},
};

const CurrentProductPageSlice = createSlice({
  name: 'currentProductPage',
  initialState,
  reducers: {
    serCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { serCurrentProduct } = CurrentProductPageSlice.actions;
export default CurrentProductPageSlice.reducer;
