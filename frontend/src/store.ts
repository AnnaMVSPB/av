import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import adSlice from './features/Ad/adSlice';

import authSlice from './features/Auth/authSlice';

const store = configureStore({
 // теперь функция combineReducers не нужна
 reducer: {
   auth: authSlice,
   ad: adSlice
 },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
