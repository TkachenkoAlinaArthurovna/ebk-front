import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  favoritesMeta: {},
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setFavoritesMeta: (state, action) => {
      state.favoritesMeta = action.payload;
    },
  },
});

export const { setFavorites, setFavoritesMeta } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
