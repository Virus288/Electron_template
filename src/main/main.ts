/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { AllPublishOptions } from 'builder-util-runtime';
import 'core-js/stable';
import { app, BrowserWindow, shell } from 'electron';
import log from 'electron-log';
import path from 'path';
import 'regenerator-runtime/runtime';
import MenuBuilder from './menu';
import { resolveMainPath } from './util';

export default class AppUpdater {
  options: AllPublishOptions = {
    provider: 'generic',
    url: 'http://10.0.1.162/ds_client',
  };

  constructor() {
    log.transports.file.level = 'info';
    // this.checkForUpdate();
  }

  // checkForUpdate() {
  //   console.log('Checking for update');
  //   const autoUpdater = new NsisUpdater(this.options);
  //   autoUpdater.checkForUpdatesAndNotify();
  // }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async (): Promise<void> => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions: string[] = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async (): Promise<void> => {
  if (isDevelopment) {
    try {
      await installExtensions();
    } catch (err) {
      console.log('Got err while installing extensions');
      console.log(err);
    }
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1300,
    height: 1000,
    minWidth: 900,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(resolveMainPath('index.html'));

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Add new ram limit for app. Default is way lower so I bumped it. In case that you ever want to work on this project and have performance problems, bump it up
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=8192');

app
  .whenReady()
  .then(() => {
    // installExtension(REDUX_DEVTOOLS);
    createWindow();
    app.on('activate', () => {
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
