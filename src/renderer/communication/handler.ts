import { ipcRenderer } from 'electron';
import { MainDispatch } from '../store/types';
import * as types from '../../types';
import * as enums from '../../enums';

export default class Handler {
  dispatch: MainDispatch;

  constructor(dispatch: MainDispatch) {
    this.dispatch = dispatch;
  }

  handleDebug(data: types.DataConnection): void {
    console.log(data);
  }

  handleData(data: types.DataConnection): void {
    console.log(data);
  }

  handleError(data: types.DataConnection): void {
    console.log(data);
  }

  sendMessage(message: string): void {
    ipcRenderer.send(enums.EMessageChannels.CONNECTION, message);
  }
}
