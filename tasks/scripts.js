var gulp       = require('gulp')
  , plumber    = require('gulp-plumber')
  // , uglify     = require('gulp-uglify')
  , browserify = require('gulp-browserify')
  , paths      = require('./paths')

module.exports = function() {
  return gulp.src(paths.sources.scripts + 'main.js')
    .pipe(plumber())
    .pipe(browserify())
    .pipe(gulp.dest(paths.dist.scripts))
}
