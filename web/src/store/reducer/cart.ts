import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Order } from 'models/order';

export interface CartState {
  order: Array<Order>;
}

const initialState: CartState = {
  order: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrderToCart: (state, action: PayloadAction<Order>) => {
      let hasProduct = state.order.some(
        or => or.product.ID === action.payload.product.ID,
      );

      if (hasProduct) {
        state.order = [...state.order, action.payload];
      }
    },
    deleteOneOrderFromCart: (state, action: PayloadAction<number>) => {
      state.order = state.order.slice(action.payload, action.payload + 1);
    },
    cleanCart: state => {
      state.order = [];
    },
  },
});

export const { addOrderToCart, deleteOneOrderFromCart, cleanCart } =
  cartSlice.actions;
export default cartSlice.reducer;
