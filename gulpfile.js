var gulp = require('gulp');
var karma = require('karma').server;
var ghPages = require('gulp-gh-pages');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
      .pipe(ghPages());
});

gulp.task('default', ['test']);