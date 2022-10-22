import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from '../types';

const popup = createSlice({
  name: 'popup',
  initialState: {
    message: null,
    enabled: false,
  } as types.IPopupState,
  reducers: {
    enablePopup(
      state: types.IPopupState,
      action: PayloadAction<types.IPopupAction>
    ) {
      state = {
        message: action.payload.message,
        enabled: true,
      };
      return state;
    },
    disablePopup(state: types.IPopupState) {
      state = {
        message: null,
        enabled: false,
      };
      return state;
    },
  },
});

export const { enablePopup, disablePopup } = popup.actions;
export default popup.reducer;
