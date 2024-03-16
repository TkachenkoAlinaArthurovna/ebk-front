import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userCartProducts: [],
};

const UserCartSlice = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    setUserCartProducts(state, action) {
      state.userCartProducts = action.payload;
    },
    removeUserCartProducts(state, action) {
      state.userCartProducts = [];
    },
  },
});

export const { setUserCartProducts, removeUserCartProducts } =
  UserCartSlice.actions;
export default UserCartSlice.reducer;
