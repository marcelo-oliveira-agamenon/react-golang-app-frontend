import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cart'; //TODO: abs path not working
import userReducer from './reducer/user';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
