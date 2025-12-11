import type { RootState } from './store';

export const pageSelector = (state: RootState) => state.page.value;
export const loadingSelector = (state: RootState) => state.loading.value;
