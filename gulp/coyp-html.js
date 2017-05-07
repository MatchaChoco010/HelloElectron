const gulp = require('gulp');

gulp.task(
  'copy-html',
  ['clean'],
  () => gulp.src('./src/**/*.html', { base: './src'}).pipe(gulp.dest('app'))
);
