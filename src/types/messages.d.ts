import * as enums from '../enums';

export interface IMessageTargets {
  target: enums.EErrors | enums.EDebugChannels | enums.EConnectionChannels;
}

export interface IDataConnection extends IMessageTargets {
  type: enums.EResponseCallback;
  payload: unknown;
}
