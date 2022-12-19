import { createSlice } from '@reduxjs/toolkit';
import * as types from '../types';

const popup = createSlice({
  name: 'popup',
  initialState: {
    message: null,
    enabled: false,
  } as types.IPopupState,
  reducers: {
    enablePopup(state: types.IPopupState, action: types.IPopupAction) {
      state.message = action.payload.message;
      state.enabled = true;
      return state;
    },
    disablePopup(state: types.IPopupState) {
      state.message = null;
      state.enabled = false;
      return state;
    },
  },
});

export const { enablePopup, disablePopup } = popup.actions;
export default popup.reducer;
