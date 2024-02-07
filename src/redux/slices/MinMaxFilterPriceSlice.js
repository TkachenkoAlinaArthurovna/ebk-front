import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minPrice: 0,
  maxPrice: 0,
};

const MinMaxFilterPriceSlice = createSlice({
  name: 'minMaxFilterPrice',
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice } = MinMaxFilterPriceSlice.actions;

export default MinMaxFilterPriceSlice.reducer;
