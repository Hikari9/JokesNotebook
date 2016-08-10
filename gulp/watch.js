var gulp = require('gulp');

var paths = {
  scss: ['./scss/**/*.scss']
};

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['scss']);
});