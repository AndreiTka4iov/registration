import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { modeReducer } from './modeReducer';
import { passwordReducer } from './passwordReducer';

export const store = configureStore({
  reducer: {
    passwordType: passwordReducer,
    mode: modeReducer,
    signIn: authReducer,
  },
});
