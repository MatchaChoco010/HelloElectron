import { BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

class MainWindowManager {
  private mainWindow: Electron.BrowserWindow | null = null;
  createMainWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'renderer/mainWindow/index.html'),
      protocol: 'file:',
      slashes: true,
    }));
    if (_DEBUG) {
      mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
    this.mainWindow = mainWindow;
  }
  closeMainWindow() { if (this.mainWindow) this.mainWindow.close(); }
  getMainWindow() { return this.mainWindow; }
}

const mainWindowManager = new MainWindowManager();

export { mainWindowManager };
