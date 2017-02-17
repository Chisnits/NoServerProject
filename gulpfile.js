const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src([
    './styles/base/*.css', 
    './styles/fonts/*.css', 
    './styles/**/*.css',
    './styles/**/*.scss'
    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch('./styles/**/*.{css,scss}', ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
