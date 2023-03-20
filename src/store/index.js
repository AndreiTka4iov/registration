import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { loaderReducer } from './loaderReducer';
import { modeReducer } from './modeReducer';
import { passwordReducer } from './passwordReducer';
import { positionReducer } from './positionReducer';


export const store = configureStore({
  reducer: {
    passwordType: passwordReducer,
    mode: modeReducer,
    signIn: authReducer,
    position: positionReducer,
    loader: loaderReducer,
  },
});
