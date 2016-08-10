var gulp = require('gulp');
var paths = require('./paths.js');

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.javascript, ['javascript']);
});