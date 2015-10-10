gulp   = require('gulp')

coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
jade   = require 'gulp-jade'
stylus = require 'gulp-stylus'

paths =
  coffee: ['source/coffee/**/*.coffee']
  stylus: ['source/stylus/main.styl']
  stylusWatch: ['source/stylus/**/*.styl']

gulp.task 'coffee', ()->
  return gulp.src paths.coffee
    .pipe do coffee
    .on 'error', console.log
    .pipe concat 'all.js'
    .pipe gulp.dest 'public/javascripts'
    .pipe rename 'all.min.js'
    .pipe do uglify
    .pipe gulp.dest 'public/javascripts'

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

gulp.task 'watch', ()->
  gulp.watch paths.coffee, ['coffee']
  gulp.watch paths.stylusWatch, ['stylus']
  gulp.watch paths.stylusWatch, ['stylus-min']

gulp.task 'default', ['coffee', 'stylus', 'stylus-min', 'watch']