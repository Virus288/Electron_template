import { PayloadAction } from '@reduxjs/toolkit';

export interface IPopupState {
  message: string | null;
  enabled: boolean;
}

interface IPopupActionBody {
  message: string;
}

export interface ISettingsState {
  enabled: boolean;
}

export interface ICommunicatorState {
  messages: { message: string; target: string }[];
}

interface ICommunicationActionBody {
  message: string;
  target: string;
}

export type IGenericAction = PayloadAction;

export type IPopupAction = PayloadAction<IPopupActionBody>;

export type ICommunicationAction = PayloadAction<ICommunicationActionBody>;
