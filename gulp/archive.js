const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');
const glob = require('glob');
const mkdirp = require('mkdirp');

function createPackOutPath(folder) {
  const filename = `${path.relative('./pack/', folder)}.zip`;
  return path.join('./dist', filename);
}
function createInstallerOutPath(setupFilePath) {
  const setupFileDir = path.relative(
    './installer/',
    path.dirname(setupFilePath)
  );
  const filename = `${setupFileDir}.zip`;
  return path.join('./dist', filename);
}
function zipPack(src) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(createPackOutPath(src));
    output.on('close', () => resolve());
    const zipArchive = archiver('zip');
    zipArchive.on('error', err => reject(err));
    zipArchive.pipe(output);
    zipArchive.directory(src, false);
    zipArchive.finalize(err => {if(err) {reject(err);}});
  });
}
function zipInstaller(src) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(createInstallerOutPath(src));
    output.on('close', () => resolve());
    const zipArchive = archiver('zip');
    zipArchive.on('error', err => reject(err));
    zipArchive.pipe(output);
    zipArchive.file(src, {name: 'Setup.exe'});
    zipArchive.finalize(err => {if(err) {reject(err);}});
  });
}

function archive() {
  mkdirp.sync('./dist/');
  return Promise.all([
    ...glob.sync('./pack/*/').map(zipPack),
    ...glob.sync('./installer/**/Setup.exe').map(zipInstaller),
  ]);
}

gulp.task(
  'archive',
  ['create-winstaller'],
  () => archive()
);
