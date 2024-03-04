import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModalAuth: false,
};

const AuthModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openAuthModal: (state, action) => {
      state.isOpenModalAuth = true;
    },
    closeAuthModal: (state, action) => {
      state.isOpenModalAuth = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = AuthModalSlice.actions;
export default AuthModalSlice.reducer;
