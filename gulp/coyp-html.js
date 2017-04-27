const gulp = require('gulp');

gulp.task('copy-html', ['clean'], () => {
  return gulp.src('./src/**/*.html', { base: './src'})
    .pipe(gulp.dest('app'));
});
