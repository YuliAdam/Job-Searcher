import type { Job } from '@components/interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: Job[] } = {
  value: [],
};

const jobSlice = createSlice({
  name: 'jobSlice',
  initialState,
  reducers: {
    setAllJob(state, action: PayloadAction<Job[]>) {
      state.value = action.payload;
    },
    addJob(state, action: PayloadAction<Job>) {
      state.value.find((i) => i.id === action.payload.id) ||
        state.value.push(action.payload);
    },
  },
});

export const { setAllJob, addJob } = jobSlice.actions;
export default jobSlice.reducer;
