import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from './passwordReducer';

export const store = configureStore({
  reducer: {
    passwordType: passwordReducer
  },
});
