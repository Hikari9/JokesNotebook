var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('./paths.js');

gulp.task('scss', function(done) {
  gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});