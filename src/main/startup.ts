import * as path from 'path';
import { spawn } from 'child_process';
import { app, BrowserWindow } from 'electron';

if (_DEBUG) {
  // 開発時には開発用のツールをインストール
  app.on('ready', () => {
    const extensions = BrowserWindow.getDevToolsExtensions();
    if (!extensions.hasOwnProperty('devtron')) {
      BrowserWindow.addDevToolsExtension('node_modules/devtron');
    }
    if (!extensions.hasOwnProperty('React Developer Tools')) {
      BrowserWindow.addDevToolsExtension('node_modules/electron-react-devtools');
    }
  });
}


if (process.argv.length > 1) {
  // Squirrelのイベントをハンドリングする
  // Setup.exeを実行したり、アプリのアップデート時には
  // コマンドライン引数としてSquirrelのイベントが渡されるので、
  // それらに対して適切に処理を実行する
  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // パスに追加したりとか、エクスプローラのコンテキストメニューに
      // アプリを登録したりアプリとファイルを関連付けたりするために
      // レジストリいじったりとかはここでやる
      spawn(
        updateDotExe,
        ['--createShortcut', exeName],
        { detached: true },
      );
      app.quit();
      break;
    case '--squirrel-uninstall':
      // --squirrel-installでの処理を戻す
      spawn(
        updateDotExe,
        ['--removeShortcut', exeName],
        { detached: true },
      );
      app.quit();
      break;
    case '--squirrel-obsolete':
      app.quit();
      break;
  }
}
