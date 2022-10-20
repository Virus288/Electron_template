import { RootMainState } from '../store/types';
import * as types from './types';

export const popupState = (state: RootMainState): types.PopupState =>
  state.popup;

export const settingsState = (state: RootMainState): types.ISettingsState =>
  state.settings;
