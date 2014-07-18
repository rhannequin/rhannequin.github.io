var gulp    = require('gulp')
  , rimraf   = require('gulp-rimraf')
  , plumber = require('gulp-plumber')
  , paths   = require('./paths')

module.exports = function() {
  return gulp.src([
        paths.dist.stylesheets + '**/*'
      , paths.dist.scripts + '**/*'
      , paths.dist.images + '**/*'
    ], {read: false})
    .pipe(plumber())
    .pipe(rimraf())
}
