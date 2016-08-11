var gulp = require('gulp');
var concat = require('gulp-concat');
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
    .pipe(concat('app.min.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./www'))
    .on('end', done);
});
