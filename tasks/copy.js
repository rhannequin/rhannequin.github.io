var gulp  = require('gulp')
  , paths = require('./paths')

  , files = [
      paths.root + 'README.md'
    , paths.root + 'LICENSE'
  ]

module.exports = function() {
  return gulp.src(files)
    .pipe(gulp.dest(paths.dist.root))
}
