import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModalMenu: false,
};

const MenuModalSlice = createSlice({
  name: 'menuModal',
  initialState,
  reducers: {
    toggleMenuModal: (state, action) => {
      state.isOpenModalMenu = !state.isOpenModalMenu;
    },
  },
});

export const { toggleMenuModal } = MenuModalSlice.actions;
export default MenuModalSlice.reducer;
