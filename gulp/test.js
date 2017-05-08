const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () => {
  return gulp.src('./test/**/*.ts')
  .pipe(mocha({compiler: 'ts:espower-typescript'}));
});
