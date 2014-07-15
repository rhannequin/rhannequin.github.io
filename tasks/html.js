var gulp    = require('gulp')
  , jade    = require('gulp-jade')
  , plumber = require('gulp-plumber')
  , paths   = require('./paths')

module.exports = function() {
  return gulp.src(paths.sources.templates + 'index.jade')
    .pipe(plumber())
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(paths.dist.root))
}
