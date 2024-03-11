import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const UserOrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { setOrders } = UserOrdersSlice.actions;
export default UserOrdersSlice.reducer;
