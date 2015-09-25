var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('js', function(){
  gulp.src(['ng/module.js', 'ng/**/*.js']) // tells gulp what files to do this to. First thing means module.js has to be first
    .pipe(sourcemaps.init())
      .pipe(concat('app.js')) // tells gulp what to do with them (e.g. concat)
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets')) // and tells gulp where to put them
    .pipe(livereload()); // live reload!
});

gulp.task('watch:js', ['js'], function(){ // js is a depdendency, so it will run JS even before anything changes, just in case
  livereload.listen();
  gulp.watch('ng/**/*.js', ['js']); // gulp watches the path, and then when those files are edited will run an array of tasks
});
