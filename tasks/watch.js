var gulp   = require('gulp')
  , server = require('./server')
  , paths  = require('./paths')

module.exports = function(){
  gulp.watch(paths.sources.templates + '**/*.jade', ['html'])
  gulp.watch(paths.sources.stylesheets + '**/*.scss', ['styles'])
  gulp.watch(paths.sources.scripts + '**/*.js', ['scripts'])
  gulp.watch(paths.sources.images + '**/*', ['images'])
  gulp.watch([paths.dist.root + '**/*']).on('change', server.livereload)
}
