import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  currentCard: {},
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action) {
      switch (action.payload.action) {
        case 'plus':
          if (!state.cartProducts) {
            state.cartProducts = [];
          }
          if (
            !state.cartProducts.find(
              (item) => item._id === action.payload.currentCard._id,
            )
          ) {
            state.cartProducts.push({
              ...action.payload.currentCard,
              count: 1,
            });
          } else {
            state.cartProducts.map((item) => {
              if (item._id === action.payload.currentCard._id) {
                item.count++;
              }
            });
          }
          break;
        case 'minus':
          state.cartProducts.map((item) => {
            if (item._id === action.payload.currentCard._id) {
              item.count--;
            }
          });
          break;
        case 'remove':
          state.cartProducts = state.cartProducts.filter(
            (item) => item.title !== action.payload.currentCard.title,
          );
          break;
      }
    },
    removeCartProducts(state, action) {
      state.cartProducts = [];
    },
    setCurrentCard(state, action) {
      state.currentCard = action.payload;
    },
  },
});

export const { toggleCart, removeCartProducts, setCurrentCard } =
  CartSlice.actions;
export default CartSlice.reducer;
