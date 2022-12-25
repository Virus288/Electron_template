// eslint-disable-next-line import/no-extraneous-dependencies
import * as Electron from 'electron';
import { MainDispatch } from '../store/types';
import * as enums from '../../enums';
import * as types from '../../types';
import Handler from './handler';
import Log from '../../logger/log';

export default class Communication {
  private listener: Electron.IpcRenderer | undefined = undefined;

  private handler: Handler;

  private client: NodeJS.Timer;

  constructor(dispatch: MainDispatch) {
    this.handler = new Handler(dispatch);
  }

  listen(): void {
    this.listener?.removeListener(enums.EConnectionChannels.Connection, (_e, data: string) =>
      this.handleMessage(JSON.parse(data) as types.IDataConnection),
    );
    this.listener = undefined;
    this.listener = Electron.ipcRenderer.on(enums.EConnectionChannels.Connection, (_e, data: string) =>
      this.handleMessage(JSON.parse(data) as types.IDataConnection),
    );
  }

  handleSendMessage(message: types.IDataConnection): void {
    this.handler.sendMessage(JSON.stringify(message));
  }

  private handleMessage(data: types.IDataConnection): void {
    switch (data.target) {
      case enums.EConnectionChannels.Connection:
        return this.handleClient();
      default:
        return Log.error('Front Communicator', 'Incorrect data type');
    }
  }

  private handleClient(): void {
    clearInterval(this.client);
  }
}
