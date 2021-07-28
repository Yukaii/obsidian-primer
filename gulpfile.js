'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))

function build() {
  return gulp
    .src('src/**/*.scss')
    .pipe(
      sass
        .sync({
          includePaths: ['node_modules'],
        })
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist'))
}

exports.build = build

exports.watch = function () {
  return gulp.watch('src/**/*.scss', { ignoreInitial: false }, build)
}

exports.default = build
