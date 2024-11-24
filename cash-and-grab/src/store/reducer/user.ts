import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/auth';

export interface UserState {
  user: User;
  loading: boolean;
  showModal: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
  showModal: false,
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
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
});

export const { saveUser, cleanUser, toggleLoading, toggleModal } =
  userSlice.actions;
export default userSlice.reducer;
