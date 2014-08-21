var gulp    = require('gulp')
  , deploy  = require('gulp-gh-pages')
  , paths   = require('./paths')

  , options = {
      branch: 'master'
    }

module.exports = function() {
  return gulp.src(paths.dist.root + '**/*')
    .pipe(deploy(options))
}
