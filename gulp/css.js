var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('css', function(){
  gulp.src('css/**/*.less')
    .pipe(sourcemaps.init())
      .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
    .pipe(livereload());
});

gulp.task('watch:css', ['css'], function(){
  livereload.listen();
  gulp.watch('css/**/*.less', ['css'])
});
