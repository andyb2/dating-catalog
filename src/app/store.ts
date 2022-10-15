import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './dateSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    date: dateSlice,
    user: userSlice,
  },
});
