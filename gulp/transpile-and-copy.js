const gulp = require('gulp');

gulp.task(
  'transpile-and-copy',
  ['transpile-ts', 'copy-html', 'create-package-json']
);
