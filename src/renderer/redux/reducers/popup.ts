import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from '../types';
import type { RootMainState } from '../../store/types';
import * as enums from '../../enums';

const popup = createSlice({
  name: 'popup',
  initialState: {
    message: null,
    targets: {
      [enums.EPopupTargets.SETTINGS]: false,
      [enums.EPopupTargets.POPUP]: false,
    },
  } as types.PopupState,
  reducers: {
    enablePopup(
      state: types.PopupState,
      action: PayloadAction<types.IPopupAction>
    ) {
      if (
        action.payload.target === enums.EPopupTargets.POPUP &&
        !action.payload.message
      ) {
        return state;
      }

      state = {
        message: action.payload.message ?? null,
        targets: {
          ...state.targets,
          [action.payload.target]: true,
        },
      };
      return state;
    },
    disablePopup(
      state: types.PopupState,
      action: PayloadAction<types.IPopupAction>
    ) {
      state = {
        message: null,
        targets: {
          ...state.targets,
          [action.payload.target]: false,
        },
      };
      return state;
    },
  },
});

export const popupState = (state: RootMainState): types.PopupState =>
  state.popup;
export const { enablePopup, disablePopup } = popup.actions;
export default popup.reducer;
