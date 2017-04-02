var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var config = require('./webpack.config');

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
});

gulp.task('webpack', function() {
  gulp.src('./main.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./main.js', ['webpack']);
});

gulp.task('default', ['watch']);
