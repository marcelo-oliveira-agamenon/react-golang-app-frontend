import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'models/auth';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {} as User,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    cleanUser: state => {
      state.user = {} as User;
    },
  },
});

export const { saveUser, cleanUser } = userSlice.actions;
export default userSlice.reducer;
