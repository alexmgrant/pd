import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import appSlice from './app-slice';

const store = configureStore({
  reducer: { appSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
