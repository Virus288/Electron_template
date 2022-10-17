import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from '../types';
import type { RootMainState } from '../../store/types';

const popup = createSlice({
  name: 'popup',
  initialState: { message: null, enabled: false } as types.PopupState,
  reducers: {
    enablePopup(
      state: types.PopupState,
      action: PayloadAction<{ message: string }>
    ) {
      state = {
        message: action.payload.message,
        enabled: true,
      };
      return state;
    },
    disablePopup(state: types.PopupState) {
      state = { message: null, enabled: false };
      return state;
    },
  },
});

export const popupState = (state: RootMainState): types.PopupState =>
  state.popup;
export const { enablePopup, disablePopup } = popup.actions;
export default popup.reducer;
