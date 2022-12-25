import { RootMainState } from '../store/types';
import * as types from './types';

export const notificationsState = (state: RootMainState): types.INotificationsState => state.notifications;

export const communicatorState = (state: RootMainState): types.ICommunicatorState => state.communicator;
