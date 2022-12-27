import { Channels } from '../../main/preload';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send(channel: Channels, args: string): void;
        on(channel: Channels, func: (args: string) => void): (() => void) | undefined;
      };
    };
  }
}

export {};
