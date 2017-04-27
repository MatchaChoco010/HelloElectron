const gulp = require('gulp');

gulp.task('build', ['transpile-ts', 'copy-html', 'create-package-json']);
