import * as Electron from 'electron';
import { ipcRenderer } from 'electron';
import { MainDispatch } from '../store/types';
import * as enums from '../../enums';
import * as types from '../../types';
import * as hooks from '../redux';
import Handler from './handler';
import Validator from '../validation';

export default class Controller {
  private readonly dispatch: MainDispatch;

  private listener: Electron.IpcRenderer | undefined = undefined;

  private handler: Handler;

  private client: NodeJS.Timer;

  constructor(dispatch: MainDispatch) {
    this.dispatch = dispatch;
    this.handler = new Handler(dispatch);
  }

  listen(): void {
    this.listener?.removeListener(
      enums.EMessageChannels.CONNECTION,
      (_e, data: types.DataConnection) => this.handleMessage(data)
    );
    this.listener = undefined;
    this.listener = ipcRenderer.on(
      enums.EMessageChannels.CONNECTION,
      (_e, data: types.DataConnection) => this.handleMessage(data)
    );

    this.handleNewClient();
  }

  handleSendMessage(message: types.DataConnection): void {
    Validator.validateInnerMessage(message);
    this.handler.sendMessage(JSON.stringify(message));
  }

  private handleNewClient(): void {
    // Send message on back with empty payload to save client there
    // If backend won't answer, create setInterval on client here in order to handle dead backend. 5 failed reqs, backend is dead.
    // If backend is dead, create some kind of message for user and reopen app on button click
  }

  private handleMessage(data: types.DataConnection): void {
    switch (data.type) {
      case enums.EResponseCallback.DATA:
        return this.handler.handleData(data);
      case enums.EResponseCallback.ERROR:
        return this.handler.handleError(data);
      case enums.EResponseCallback.DEBUG:
        return this.handler.handleDebug(data);
      case enums.EResponseCallback.CLIENT:
        return this.handleClient();
      default:
        return console.log('Incorrect data type');
    }
  }

  private handleClient(): void {
    clearInterval(this.client);
    this.dispatch(hooks.disableLoading());
  }
}
