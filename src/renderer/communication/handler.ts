// eslint-disable-next-line import/no-extraneous-dependencies
import { MainDispatch } from '../store/types';
import * as types from '../../types';
import * as enums from '../../enums';
import { ELogTypes } from '../../enums';

export default class Handler {
  dispatch: MainDispatch;

  constructor(dispatch: MainDispatch) {
    this.dispatch = dispatch;
  }

  handleError(data: types.IDataConnection): void {
    return this.sendLog(ELogTypes.Log, 'Handle error', JSON.stringify(data));
  }

  sendMessage(message: string): void {
    window.electron.ipcRenderer.send(enums.EConnectionChannels.Connection, message);
  }

  sendLog(type: ELogTypes, target: string, message: string): void {
    return this.sendMessage(
      JSON.stringify({
        type: enums.EResponseCallback.Log,
        payload: { type, target, message },
      }),
    );
  }
}
