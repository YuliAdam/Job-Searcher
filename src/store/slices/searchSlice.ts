import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  getSearchFromLocalStorage,
  setSearchInLocalStorage,
} from 'localStorage/localStorage';

const initialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchFromLocalStorage(state) {
      state.value = getSearchFromLocalStorage();
    },
    setSearchInLocalStorage(state, action: PayloadAction<string>) {
      setSearchInLocalStorage(action.payload);
      state.value = action.payload;
    },
    cleanSearch(state) {
      state.value = '';
    },
  },
});

export const { setSearchFromLocalStorage, cleanSearch } = searchSlice.actions;
export default searchSlice.reducer;
