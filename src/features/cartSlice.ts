import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/phoneTypes';

export interface PhonesState {
  currentCart: Phone[];
}

const initialState: PhonesState = {
  currentCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Phone>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart = state.currentCart.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setCart: (state, action: PayloadAction<Phone[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
