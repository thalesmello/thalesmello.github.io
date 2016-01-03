var gulp = require('gulp');
var marked = require('gulp-marked');

gulp.task('default', () => {
  gulp.src('pre-article/*.md')
    .pipe(marked({}))
    .pipe(gulp.dest('article/'))
});
