const gulp = require('gulp');
const packager = require('electron-packager');

const {name, description} = require('../package.json');

const option = {
  dir: './app/',
  arch: 'all',
  asar: true,
  icon: './tmp/icon',
  out: './pack/',
  platform: ['win32', 'darwin', 'linux'],
  win32metadata: {
    FileDescription: description,
    OriginalFilename: `${name}.exe`,
    ProductName: name,
    InternalName: name,
  },
};
gulp.task(
  'pack',
  ['create-icon', 'transpile-and-copy'],
  cb => packager(option, cb)
);
