import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productType';

export interface PhonesState {
  currentCard: Product[];
}

const initialState: PhonesState = {
  currentCard: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard.push(action.payload);
    },
    removeFromCard: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard = state.currentCard.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setCard: (state, action: PayloadAction<Product[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard = action.payload;
    },
  },
});

export const { addToCard, removeFromCard, setCard } = cardSlice.actions;
export default cardSlice.reducer;
