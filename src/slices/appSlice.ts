/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { loginSuccess } from './authSlice';

export interface AppSliceState {
  neverSignedIn: boolean;
}

const appDataInitialState: AppSliceState = {
  neverSignedIn: true,
};

const appData = createSlice({
  name: 'appData',
  initialState: appDataInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginSuccess, (state, action) => {
      if (action.payload) {
        // Record that a user has logged into this app
        state.neverSignedIn = false;
      }
    });
  },
});

export default appData.reducer;
