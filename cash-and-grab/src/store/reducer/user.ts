import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/auth';

export interface UserState {
  user: User;
  loading: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
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
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { saveUser, cleanUser, toggleLoading } = userSlice.actions;
export default userSlice.reducer;
