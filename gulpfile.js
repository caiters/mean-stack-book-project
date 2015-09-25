var gulp = require('gulp');

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function(task){
  require('./gulp/' + task);
});

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);



/*
// OLD STUFF
gulp.task('welcome', function() {
  console.log('welcome');
});
// this runs "welcome" before "hello"! if you do "gulp hello"
gulp.task('hello', ['welcome'], function() {
  console.log('hello world');
});
*/
