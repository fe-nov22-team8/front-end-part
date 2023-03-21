import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productType';

export interface PhonesState {
  currentFavorites: Product[];
}

const initialState: PhonesState = {
  currentFavorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites = state.currentFavorites.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setFavorites: (state, action: PayloadAction<Product[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentFavorites = action.payload;
    },
  },
});

export const { addFavorites, removeFavorites, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
