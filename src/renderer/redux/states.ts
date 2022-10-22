import { RootMainState } from '../store/types';
import * as types from './types';

export const IPopupState = (state: RootMainState): types.IPopupState =>
  state.popup;

export const settingsState = (state: RootMainState): types.ISettingsState =>
  state.settings;

export const loadingState = (state: RootMainState): types.ISettingsState =>
  state.loading;

export const communicatorState = (
  state: RootMainState
): types.ICommunicatorState => state.communicator;
