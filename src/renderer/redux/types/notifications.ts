import { PayloadAction } from '@reduxjs/toolkit';

export interface INotificationsState {
  messages: string[];
}

export interface INotificationActionBody {
  message: string;
}

export type INotificationAction = PayloadAction<INotificationActionBody>;
