var gulp = require('gulp');

var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

var paths = {
    coffee: ['source/coffee/**/*.coffee'],
    stylus: ['source/stylus/main.styl'],
    stylusWatch: ['source/stylus/**/*.styl'],
    jade: ['source/jade/**/*.jade']
};

gulp.task('coffee', function() {
    return gulp.src(paths.coffee)
        .pipe(coffee())
        .on('error', console.log)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/javascripts'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('stylus', function() {
    return gulp.src(paths.stylus)
        .pipe(stylus({compress: false}))
        .on('error', console.log)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('stylus-min', function() {
    return gulp.src(paths.stylus)
        .pipe(stylus({compress: true}))
        .on('error', console.log)
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('jade', function() {
    return gulp.src(paths.jade)
        .pipe(jade())
        .on('error', console.log)
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.stylusWatch, ['stylus']);
    gulp.watch(paths.stylusWatch, ['stylus-min']);
    //gulp.watch(paths.jade, ['jade']);
});

gulp.task('default', ['coffee', 'stylus', 'stylus-min', 'watch']);