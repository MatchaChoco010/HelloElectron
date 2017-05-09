const gulp = require('gulp');
const icongen = require('icon-gen');

const option = {
  modes: ['ico', 'icns'],
  names: {
    ico: 'icon',
    icns: 'icon',
  },
};
gulp.task(
  'create-icon',
  ['clean'],
  () => icongen('./src/assets/icon.svg', './icon/', option)
);
