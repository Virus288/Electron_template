import { PayloadAction } from '@reduxjs/toolkit';

export interface INotificationsState {
  messages: string[];
  active: boolean;
}

export interface INotificationActionBody {
  message: string;
}

export type INotificationAction = PayloadAction<INotificationActionBody>;
