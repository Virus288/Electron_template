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

  handleDebug(data: types.DataConnection): void {
    Log.log('Handle debug', data);
  }

  handleData(data: types.DataConnection): void {
    Log.log('Handle data', data);
  }

  handleError(data: types.DataConnection): void {
    Log.log('Handle error', data);
  }

  sendMessage(message: string): void {
    ipcRenderer.send(enums.EMessageChannels.CONNECTION, message);
  }
}
