var gulp     = require('gulp')
  , jade     = require('gulp-jade')
  , plumber  = require('gulp-plumber')
  , paths    = require('./paths')
  , projects = require('../' + paths.sources.templates + 'projects.json')

module.exports = function() {
  return gulp.src(paths.sources.templates + 'index.jade')
    .pipe(plumber())
    .pipe(jade({ pretty: true, locals: { projects: projects } }))
    .pipe(gulp.dest(paths.dist.root))
}
