import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/productType';

export interface PhonesState {
  currentCart: Product[];
}

const initialState: PhonesState = {
  currentCart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart = state.currentCart.filter(
        (item) => item.itemId !== action.payload.itemId,
      );
    },
    setCart: (state, action: PayloadAction<Product[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currentCart = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
