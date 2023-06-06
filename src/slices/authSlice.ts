import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//! Best setup for Cognito, changes may be necessary in the future.

export interface UserTokens {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  expiresAt: string;
}

export interface AuthSliceState {
  user: UserTokens;
  keepLoggedUntil: number;
  signOutMessage: string;
}

const authInitialState: AuthSliceState = {
  user: {
    accessToken: '',
    refreshToken: '',
    idToken: '',
    expiresAt: '',
  },
  keepLoggedUntil: 0,
  signOutMessage: '',
};

const auth = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    loginSuccess: (state, { payload }: PayloadAction<UserTokens>) => {
      state.user = payload;
    },
    signOut: (state, { payload }: PayloadAction<string | undefined>) => {
      state.user = authInitialState.user;
      state.signOutMessage = payload || '';
      state.keepLoggedUntil = 0;
    },
    setLoggedUntil: (state, { payload }: PayloadAction<number>) => {
      state.keepLoggedUntil = payload;
    },
    resetSignOutMessage: state => {
      state.signOutMessage = '';
    },
  },
});

export const { loginSuccess, signOut, resetSignOutMessage, setLoggedUntil } =
  auth.actions;

export default auth.reducer;
