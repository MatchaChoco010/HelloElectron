const gulp = require('gulp');
const packager = require('electron-packager');

const {name, description, companyName} = require('../package.json');

const option = {
  dir: './app/',
  arch: 'all',
  asar: true,
  icon: './icon/icon',
  out: './pack/',
  platform: ['win32', 'darwin', 'linux'],
  win32metadata: {
    CompanyName: companyName,
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
