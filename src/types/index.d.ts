import * as enums from '../enums';
import mainStore from '../renderer/store';

export interface DataConnection {
  target: enums.EMessageChannels | enums.EDebugChannels | enums.EErrors;
  type: enums.EResponseCallback;
  payload: unknown;
}

export interface IFullError extends Error {
  code: string;
  status: number;
}

declare global {
  interface Window {
    store: typeof mainStore;
  }
}
