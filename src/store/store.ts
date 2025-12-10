import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import jobReducer from './slices/jobSlice';
import pageReducer from './slices/pageSlice';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    job: jobReducer,
    page: pageReducer,
    loading: loadingReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
