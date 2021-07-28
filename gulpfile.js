'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const clean = require('gulp-clean')

function build() {
  return gulp
    .src('src/theme.scss')
    .pipe(
      sass
        .sync({
          includePaths: ['node_modules'],
          sourceMapEmbed: true,
          sourceMap: true,
        })
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist'))
}

exports.build = gulp.series(cleanTask, build)

exports.watch = function () {
  return gulp.watch('src/**/*.scss', { ignoreInitial: false }, build)
}

exports.default = build

function cleanTask() {
  return gulp.src('dist').pipe(clean())
}

exports.clean = cleanTask
