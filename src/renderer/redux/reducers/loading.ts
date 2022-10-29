import { createSlice } from '@reduxjs/toolkit';
import * as types from '../types';

const loading = createSlice({
  name: 'loading',
  initialState: { enabled: false } as types.ISettingsState,
  reducers: {
    enableLoading(state: types.ISettingsState) {
      state.enabled = true;
      return state;
    },
    disableLoading(state: types.ISettingsState) {
      state.enabled = false;
      return state;
    },
  },
});

export const { enableLoading, disableLoading } = loading.actions;
export default loading.reducer;

// Loading should only be used by 'Communicator'.
