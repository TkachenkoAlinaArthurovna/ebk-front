import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
