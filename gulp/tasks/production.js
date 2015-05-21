var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').watch;

gulp.task('production', ['browserify', 'styles', 'html'], function() {
  gulp.src(config.src);
});
