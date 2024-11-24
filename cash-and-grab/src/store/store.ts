'use client';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cart';
import userReducer from './reducer/user';

export const store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
