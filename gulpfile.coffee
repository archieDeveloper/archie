gulp    = require('gulp')
path    = require 'path'

coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
uglify  = require 'gulp-uglify'
rename  = require 'gulp-rename'
jade    = require 'gulp-jade'
stylus  = require 'gulp-stylus'
webpack = require 'webpack'
gutil   = require 'gulp-util'

paths =
  coffee: ['source/coffee/**/*.coffee']
  stylus: ['source/stylus/main.styl']
  stylusWatch: ['source/stylus/**/*.styl']

gulp.task 'stylus', ()->
  return gulp.src paths.stylus
    .pipe stylus compress: false
    .on 'error', console.log
    .pipe concat 'all.css'
    .pipe gulp.dest 'public/stylesheets'

gulp.task 'stylus-min', ()->
  return gulp.src paths.stylus
    .pipe stylus compress: true
    .on 'error', console.log
    .pipe concat 'all.min.css'
    .pipe gulp.dest 'public/stylesheets'

gulp.task "webpack", (callback)->
    config = require './webpack.config'
    webpack config, (err, stats)->
        if err then throw new gutil.PluginError "webpack", err
        gutil.log "[webpack]", stats.toString
            colors: true
        do callback

gulp.task 'watch', ()->
  gulp.watch paths.coffee, ['webpack']
  gulp.watch paths.stylusWatch, ['stylus']
  gulp.watch paths.stylusWatch, ['stylus-min']

gulp.task 'default', ['stylus', 'stylus-min', 'webpack', 'watch']