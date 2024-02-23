import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogLinks: [],
};

const CatalogLinksSlice = createSlice({
  name: 'catalogLinks',
  initialState,
  reducers: {
    setCatalogLinks: (state, action) => {
      state.catalogLinks = action.payload;
    },
  },
});

export const { setCatalogLinks } = CatalogLinksSlice.actions;
export default CatalogLinksSlice.reducer;
