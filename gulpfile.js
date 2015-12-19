'use strict';

const gulp = require('gulp');
const tsc = require('gulp-typescript');

gulp.task('default', ['tsc']);
gulp.task('tsc', () => {
  const tscResult = gulp.src(['**/*.ts', '!node_modules/**'])
    .pipe(tsc({
      declaration: true,
      module: 'umd'
    }));

  tscResult.dts.pipe(gulp.dest('typings'));
  tscResult.js.pipe(gulp.dest(__dirname));
});
gulp.task('watch', () => {
  return gulp.watch('**/*.ts', ['tsc']);
});
