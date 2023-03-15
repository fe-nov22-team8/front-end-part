import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/phoneTypes';

export interface PhonesState {
  currentFavorites: Phone[];
}

const initialState: PhonesState = {
  currentFavorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites = state.currentFavorites.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setFavorites: (state, action: PayloadAction<Phone[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites = action.payload;
    },
  },
});

export const { addFavorites, removeFavorites, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
