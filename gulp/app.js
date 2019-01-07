const gulp      = require('gulp')
const concat    = require('gulp-concat')
const uglify    = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const htmlmin   = require('gulp-htmlmin')

gulp.task('app', ['app.html', 'app.css', 'app.js'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
})

gulp.task('app.css', () => {
    return gulp.src('src/css/**/*.css')
        .pipe(uglifycss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('app.js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('dist/js'))
})