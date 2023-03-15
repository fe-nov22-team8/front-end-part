import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/phoneTypes';

export interface PhonesState {
  currentCard: Phone[];
}

const initialState: PhonesState = {
  currentCard: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard.push(action.payload);
    },
    removeFromCard: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard = state.currentCard.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setCard: (state, action: PayloadAction<Phone[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCard = action.payload;
    },
  },
});

export const { addToCard, removeFromCard, setCard } = cardSlice.actions;
export default cardSlice.reducer;
