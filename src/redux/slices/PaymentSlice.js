import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPayment: '',
};

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setSelectedPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },
  },
});

export const { setSelectedPayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;
