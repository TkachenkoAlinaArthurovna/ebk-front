import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    firstname: '',
    surname: '',
    phone: '',
    email: '',
  },
};

const UserInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.userInfo.firstname = action.payload;
    },
    setSurname: (state, action) => {
      state.userInfo.surname = action.payload;
    },
    setPhone: (state, action) => {
      state.userInfo.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
  },
});

export const { setFirstname, setSurname, setPhone, setEmail } =
  UserInfoSlice.actions;
export default UserInfoSlice.reducer;
