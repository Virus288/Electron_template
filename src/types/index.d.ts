import * as enums from '../enums';

export interface DataConnection {
  target: enums.EMessageChannels | enums.EDebugChannels | enums.EErrors;
  type: enums.EResponseCallback;
  payload: unknown;
}

export interface IFullError extends Error {
  code: string;
  status: number;
}
