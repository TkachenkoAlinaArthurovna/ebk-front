import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsOpen: false
};

const DevModalSlice = createSlice({
  name: 'devModal',
  initialState,
  reducers: {
    openDevModal: (state, action) => {
      state.modalIsOpen = true;
    },
    closeDevModal: (state, action) => {
      state.modalIsOpen = false;
    },
  },
});

export const { openDevModal, closeDevModal } = DevModalSlice.actions;
export default DevModalSlice.reducer;
