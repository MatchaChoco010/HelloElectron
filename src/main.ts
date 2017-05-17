import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';
import './main/startup';

let mainWindow: Electron.BrowserWindow | null;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'renderer/mainWindow/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  if (_DEBUG) { mainWindow.webContents.openDevTools(); }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};


app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
