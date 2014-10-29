var gulp         = require('gulp')
  , plumber      = require('gulp-plumber')
  , compass      = require('gulp-compass')
  , autoprefixer = require('gulp-autoprefixer')
  , minifyCSS    = require('gulp-minify-css')
  , paths        = require('./paths')

module.exports = function() {
  var sassDir = paths.sources.stylesheets
  return gulp.src(sassDir + 'main.scss')
    .pipe(plumber())
    .pipe(compass({
        css: paths.tmp.root
      , sass: sassDir
      , image: paths.sources.images
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(minifyCSS())
    .pipe(gulp.dest(paths.dist.stylesheets))
}
