import { PayloadAction } from '@reduxjs/toolkit';
import * as types from '../../../types/messages';
import * as enums from '../../../enums';

export interface ICommunicatorState {
  messages: ICommunicatorMessage[];
  counter: number;
}

export interface ICommunicatorMessage extends types.IMessageTargets {
  counter: number;
  message: unknown;
  type: enums.EResponseCallback;
}

interface ICommunicatorBody extends types.IMessageTargets {
  message: unknown;
  type: enums.EResponseCallback;
}

export type ICommunicationAction = PayloadAction<ICommunicatorBody>;
