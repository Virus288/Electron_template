// eslint-disable-next-line import/no-extraneous-dependencies
import { ipcRenderer } from 'electron';
import { MainDispatch } from '../store/types';
import * as types from '../../types';
import * as enums from '../../enums';
import Log from '../../logger/log';

export default class Handler {
  dispatch: MainDispatch;

  constructor(dispatch: MainDispatch) {
    this.dispatch = dispatch;
  }

  handleError(data: types.IDataConnection): void {
    Log.log('Handle error', JSON.stringify(data));
  }

  sendMessage(message: string): void {
    ipcRenderer.send(enums.EConnectionChannels.Connection, message);
  }
}
