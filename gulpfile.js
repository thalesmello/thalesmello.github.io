var gulp = require('gulp'),
    mds = require('markdown-styles'),
    path = require('path');




gulp.task('default', (done) => {
  var opts = mds.resolveArgs({
    input: path.normalize(process.cwd() + '/pre-article'),
    output: path.normalize(process.cwd() + '/article'),
    layout: 'github'
  });

  mds.render(opts, done);
});
