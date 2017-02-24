var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
	bower = require('gulp-bower'),
	filter = require('gulp-filter'),
	stripDebug = require('gulp-strip-debug'),
    autoprefixer = require('gulp-autoprefixer'),
    removeLogs = require('gulp-remove-logging'),
    browserSync = require('browser-sync').create();

var DEST = 'app/lib/';

gulp.task('bower', function() {
 /*const f = filter([ '**' ]);*/
 const f = filter(['!**/index.js','**/*.{ttf,woff,woff2,eof,svg,js,css}']);
 return bower({ directory: 'vendors' })
	.pipe(f)
    .pipe(gulp.dest(DEST))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './app/main.html'
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('app/template/*.html', browserSync.reload);
  // Watch .js files
//  gulp.watch('app/js/*.js', ['scripts']);
//  // Watch .css files
//  gulp.watch('app/skin/css/share/*.css', ['css']);
});

//gulp.task('dest', function() {
//	return  gulp.src('app/**')
//	.pipe(removeLogs())
//    .pipe(gulp.dest('../mioms/src/main/resources/public'));
//});


// Default Task
gulp.task('default', ['bower', 'browser-sync', 'watch']);
