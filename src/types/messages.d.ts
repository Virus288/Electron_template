import * as enums from '../enums';
import { ELogTypes } from '../enums';

export interface IMessageTargets {
  target: enums.EErrors | enums.EDebugChannels | enums.EConnectionChannels;
}

export interface IDataConnection extends IMessageTargets {
  type: enums.EResponseCallback;
  payload: unknown;
}

export interface ILogMessage {
  type: ELogTypes;
  target: string;
  message: string;
}
