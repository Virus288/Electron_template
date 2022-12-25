import { createSlice } from '@reduxjs/toolkit';
import type * as types from '../types';

const notifications = createSlice({
  name: 'notifications',
  initialState: { messages: [] } as types.INotificationsState,
  reducers: {
    addNotification(state, action: types.INotificationAction) {
      if (!action.payload.message) return state;

      state.messages.push(action.payload.message);
      if (state.messages.length > 0) state.active = true;
      return state;
    },
    disableNotification(state) {
      state.active = false;
      return state;
    },
  },
});

export const { addNotification, disableNotification } = notifications.actions;
export default notifications.reducer;
