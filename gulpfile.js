var gulp = require('gulp'),
    mds = require('markdown-styles'),
    path = require('path'),
    del = require('del');

gulp.task('default', ['clean_articles'], (done) => {
  var opts = mds.resolveArgs({
    input: path.normalize(process.cwd() + '/pre-article'),
    output: path.normalize(process.cwd() + '/article'),
    layout: 'github'
  });

  mds.render(opts, done);
});

gulp.task('clean_articles', function () {
  return del('article');
});
