import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: boolean } = {
  value: false,
};

const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
