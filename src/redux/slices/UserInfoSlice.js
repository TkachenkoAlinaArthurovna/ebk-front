import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  surname: '',
  phone: '',
  email: '',
};

const UserInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setFirstname, setSurname, setPhone, setEmail } =
  UserInfoSlice.actions;
export default UserInfoSlice.reducer;
