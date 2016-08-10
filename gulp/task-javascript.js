var gulp = require('gulp');
var concat = require('gulp-concat');
var iife = require('gulp-iife');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var paths = require('./paths.js');

gulp.task('javascript', function(done) {
  return gulp.src(paths.javascript)
    .pipe(sourcemaps.init())    
    .pipe(ngAnnotate()) // need to annotate AngularJS injections
    .on('error', done)
    .pipe(iife({        // wrap all files to avoid scope leak
      useStrict: true,
      trimCode: true,
    }))
    .pipe(concat('bundle.min.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./www/js'));
});
