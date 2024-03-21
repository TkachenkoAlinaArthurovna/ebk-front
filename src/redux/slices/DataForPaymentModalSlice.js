import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataForPaymentModal: '',
};

const DataForPaymentModalSlice = createSlice({
  name: 'dataForPaymentModal',
  initialState,
  reducers: {
    setDataForPaymentModal: (state, action) => {
      state.dataForPaymentModal = action.payload;
    },
  },
});

export const { setDataForPaymentModal } = DataForPaymentModalSlice.actions;
export default DataForPaymentModalSlice.reducer;
