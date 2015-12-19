'use strict';

const gulp = require('gulp');
const tsc = require('gulp-typescript');

gulp.task('default', ['tsc']);
gulp.task('tsc', () => {
  return gulp.src(['**/*.ts', '!node_modules/**'])
    .pipe(tsc({
      declaration: true
    }))
    .pipe(gulp.dest(__dirname));
});
