const gulp = require('gulp');
const fs = require('fs');
const mkdirp = require('mkdirp');

const {name, version, author, description} = require('../package.json');

gulp.task(
  'create-package-json',
  ['clean'],
  cb => {
    mkdirp.sync('./app/');
    fs.writeFile(
      './app/package.json',
      JSON.stringify({name, version, author, description, main: 'main.js'}),
      cb
    );
  }
);
