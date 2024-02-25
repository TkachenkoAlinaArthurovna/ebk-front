import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const index = state.favorites.indexOf(action.payload);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
