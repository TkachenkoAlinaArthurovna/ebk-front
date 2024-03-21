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
      state.userCartProducts = state.userCartProducts.filter(
        (item) => item.product.crmId !== action.payload,
      );
    },
    addUserCartProduct(state, action) {
      for (let i = 0; i < state.userCartProducts.length; i++) {
        if (state.userCartProducts[i].product.crmId === action.payload) {
          state.userCartProducts[i].quantity += 1;
          return;
        }
      }
    },
    subtractUserCartProduct(state, action) {
      for (let i = 0; i < state.userCartProducts.length; i++) {
        if (state.userCartProducts[i].product.crmId === action.payload) {
          state.userCartProducts[i].quantity -= 1;
          return;
        }
      }
    },
  },
});

export const {
  setUserCartProducts,
  removeUserCartProducts,
  addUserCartProduct,
  subtractUserCartProduct,
} = UserCartSlice.actions;
export default UserCartSlice.reducer;
