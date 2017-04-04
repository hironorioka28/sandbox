var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('./webpack.config');

var ress = './node_modules/ress/dist/ress.min.css';
var cssPath  = './css/style.css';
var distCssPath  = './css/dist.css';

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe($.sass())
    .pipe(gulp.dest('./css/'));
});

gulp.task('concat', function() {
  var files = [ress, cssPath];

  gulp.src(files)
    .pipe($.concat('dist.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('webpack', function() {
  gulp.src('./main.js')
    .pipe($.webpack(config))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('./main.js', ['webpack']);
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch(cssPath, ['concat']);
  gulp.watch(distCssPath, function(e) {
    gulp.src(distCssPath)
      .pipe($.combineMediaQueries({
        log: false
      }))
      .pipe($.minifyCss())
      .pipe(gulp.dest('./css/'));
  });
});

gulp.task('default', ['watch']);
