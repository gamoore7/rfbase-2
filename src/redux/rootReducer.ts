import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from '../api/apiSlice';
import appDataReducer from '../slices/appSlice';
import authReducer from '../slices/authSlice';

// Add all reducers here from Slice files.
const rootReducer = combineReducers({
  appData: appDataReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

declare global {
  type RootState = ReturnType<typeof rootReducer>;
}

export default rootReducer;
