'use strict';

const gulp = require('gulp');
const tsc = require('gulp-typescript');

gulp.task('default', ['tsc']);
gulp.task('tsc', () => {
  return gulp.src(['**/*.ts', '!node_modules/**'])
    .pipe(tsc({
      declaration: true,
      module: 'commonjs'
    }))
    .pipe(gulp.dest(__dirname));
});
gulp.task('watch', () => {
  return gulp.watch('**/*.ts', ['tsc']);
});
