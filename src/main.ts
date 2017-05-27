import { app } from 'electron';
import './main/startup';
import { mainWindowManager } from './main/mainWindowManager';

app.on('ready', () => mainWindowManager.createMainWindow());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindowManager.getMainWindow() === null) {
    mainWindowManager.createMainWindow();
  }
});
