const gulp = require('gulp');
const glob = require('glob');
const path = require('path');
const {createWindowsInstaller} = require('electron-winstaller');

function createInstaller() {
  const options = glob.sync('./pack/*-win32-*/')
  .map(
    appDir => ({
      appDirectory: appDir,
      outputDirectory: path.join('./installer/', `${path.relative('./pack', appDir)}-installer`),
      loadingGif: './src/assets/loading.gif',
      noMsi: true,
    })
  );
  return Promise.all(options.map(o => createWindowsInstaller(o)));
}

gulp.task(
  'create-winstaller',
  ['pack'],
  () => createInstaller()
);
