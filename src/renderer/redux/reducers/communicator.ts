import { createSlice } from '@reduxjs/toolkit';
import * as types from '../types';

const communicator = createSlice({
  name: 'communicator',
  initialState: { messages: [] } as types.ICommunicatorState,
  reducers: {
    sendMessage(
      state: types.ICommunicatorState,
      action: types.ICommunicationAction
    ) {
      state.messages = [...state.messages, action.payload];
      return state;
    },
  },
});

export const { sendMessage } = communicator.actions;
export default communicator.reducer;
