import * as types from '../../types';
import * as enums from '../../enums';
import fullLog from '../errors/handler';

export default class Handler {
  private client: Electron.WebContents | null = null;

  handleClient(client: Electron.WebContents): void {
    this.client = client;
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
    if (this.client) {
      fullLog(['Backend client does not exist']);
    } else {
      this.client.send(enums.EMessageChannels.CONNECTION, message);
    }
  }
}
