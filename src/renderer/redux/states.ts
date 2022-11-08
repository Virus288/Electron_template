import { RootMainState } from '../store/types';
import * as types from './types';

export const IPopupState = (state: RootMainState): types.IPopupState => state.popup;

export const ISettingsState = (state: RootMainState): types.ISettingsState => state.settings;

export const ILoadingState = (state: RootMainState): types.ISettingsState => state.loading;

export const ICommunicatorState = (state: RootMainState): types.ICommunicatorState => state.communicator;
