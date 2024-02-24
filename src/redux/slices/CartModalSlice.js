import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModalCart: false,
};

const CartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    toggleCartModal: (state, action) => {
      state.isOpenModalCart = !state.isOpenModalCart;
    },
  },
});

export const { toggleCartModal } = CartModalSlice.actions;
export default CartModalSlice.reducer;
