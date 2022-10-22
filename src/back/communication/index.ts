import * as enums from '../../enums';
import * as types from '../../types';
import Handler from './handler';
import Validator from '../validation';

export default class Communication {
  private listener: Electron.IpcMain | undefined = undefined;

  private handler: Handler;

  constructor() {
    this.handler = new Handler();
  }

  listen(): void {
    this.listener?.removeListener(
      enums.EMessageChannels.CONNECTION,
      (e, data: types.DataConnection) => this.handleMessage(e, data)
    );
    this.listener = undefined;
    this.listener = this.listener?.on(
      enums.EMessageChannels.CONNECTION,
      (e, data: types.DataConnection) => this.handleMessage(e.sender, data)
    );
  }

  handleSendMessage(message: types.DataConnection): void {
    Validator.validateInnerMessage(message);
    this.handler.sendMessage(JSON.stringify(message));
  }

  handleSendError(error: string): void {
    this.handleSendMessage({
      target: enums.EErrors.GENERIC,
      type: enums.EResponseCallback.ERROR,
      payload: error,
    });
  }

  private handleMessage(
    e: Electron.WebContents,
    data: types.DataConnection
  ): void {
    switch (data.type) {
      case enums.EResponseCallback.DATA:
        return this.handler.handleData(data);
      case enums.EResponseCallback.ERROR:
        return this.handler.handleError(data);
      case enums.EResponseCallback.DEBUG:
        return this.handler.handleDebug(data);
      case enums.EResponseCallback.CLIENT:
        return this.handler.handleClient(e);
      default:
        return console.log('Incorrect data type');
    }
  }
}
