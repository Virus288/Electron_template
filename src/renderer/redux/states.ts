import { RootMainState } from '../store/types';
import * as types from './types';

export const IPopupState = (state: RootMainState): types.IPopupState => state.popup;

export const ICommunicatorState = (state: RootMainState): types.ICommunicatorState => state.communicator;
