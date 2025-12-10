import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: number } = {
  value: 1,
};

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { changePage, setPage } = pageSlice.actions;
export default pageSlice.reducer;
