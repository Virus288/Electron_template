import { MainDispatch } from '../store/types';
import * as enums from '../../enums';
import * as types from '../../types';
import Handler from './handler';

export default class Communication {
  private handler: Handler;

  private client: NodeJS.Timer;

  constructor(dispatch: MainDispatch) {
    this.handler = new Handler(dispatch);
  }

  listen(): void {
    if (!window.electron?.ipcRenderer) {
      console.info('Electron does not exist. Will not contact backend');
    } else {
      window.electron.ipcRenderer.on(enums.EConnectionChannels.Connection, (data) => {
        this.handleMessage(JSON.parse(data) as types.IDataConnection);
      });
    }
  }

  handleSendMessage(message: types.IDataConnection): void {
    this.handler.sendMessage(JSON.stringify(message));
  }

  private handleMessage(data: types.IDataConnection): void {
    switch (data.target) {
      case enums.EConnectionChannels.Connection:
        return this.handleClient();
      default:
        return this.handler.sendLog(enums.ELogTypes.Error, 'Front Communicator', 'Incorrect data type');
    }
  }

  private handleClient(): void {
    clearInterval(this.client);
  }
}
