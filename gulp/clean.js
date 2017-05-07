const gulp = require('gulp');
const del = require('del');

gulp.task(
  'clean',
  () => del(['app', 'pack', 'installer', 'dist', 'tmp'])
);
