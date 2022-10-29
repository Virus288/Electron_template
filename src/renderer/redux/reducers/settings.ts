import { createSlice } from '@reduxjs/toolkit';
import * as types from '../types';

const settings = createSlice({
  name: 'settings',
  initialState: { enabled: false } as types.ISettingsState,
  reducers: {
    enableSettings(state: types.ISettingsState) {
      state.enabled = true;
      return state;
    },
    disableSettings(state: types.ISettingsState) {
      state.enabled = false;
      return state;
    },
  },
});

export const { enableSettings, disableSettings } = settings.actions;
export default settings.reducer;
