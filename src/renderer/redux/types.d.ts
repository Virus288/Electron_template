export interface IPopupState {
  message: string | null;
  enabled: boolean;
}

export interface IPopupAction {
  message: string;
}

export interface ISettingsState {
  enabled: boolean;
}

export interface ICommunicatorState {
  messages: { message: string; target: string }[];
}

export interface CommunicationAction {
  message: string;
  target: string;
}
