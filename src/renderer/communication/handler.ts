import { ipcRenderer } from 'electron';
import * as types from '../../types';
import * as enums from '../../enums';
import Log from '../../logger/log';

export default class Handler {
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
