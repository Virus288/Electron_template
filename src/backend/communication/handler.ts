import * as types from '../../types';
import * as enums from '../../enums';
import Log from '../../logger/log';

export default class Handler {
  private client: Electron.WebContents | null = null;

  handleClient(client: Electron.WebContents): void {
    this.client = client;
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
    if (!this.client) {
      Log.error('Backend Communicator', 'Backend client does not exist');
    } else {
      this.client.send(enums.EMessageChannels.CONNECTION, message);
    }
  }
}
