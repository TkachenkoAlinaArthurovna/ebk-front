import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDelivery: 'До відділення Нової Пошти',
};

const DeliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setSelectedDelivery: (state, action) => {
      state.selectedDelivery = action.payload;
    },
  },
});

export const { setSelectedDelivery } = DeliverySlice.actions;
export default DeliverySlice.reducer;
