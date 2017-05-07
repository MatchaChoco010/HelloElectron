import {app, BrowserWindow} from 'electron';
import * as path from 'path';
import * as url from 'url';


if (_DEBUG) {
  // 開発用のツールをインストール
  app.on('ready', () => {
    const extensions = BrowserWindow.getDevToolsExtensions();
    if (!extensions.hasOwnProperty('devtron')) {
      BrowserWindow.addDevToolsExtension(require('devtron').path);
    }
  });
}


let mainWindow: Electron.BrowserWindow | null;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  if (_DEBUG) { mainWindow.webContents.openDevTools(); }

  mainWindow.on('closed', function () {
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
