const gulp = require('gulp')
const server = require('gulp-webserver')
const watch = require('gulp-watch')

gulp.task('watch', () => {
    watch('src/**/*.html',    () => gulp.start('app.html'))
    watch('src/css/**/*.css', () => gulp.start('app.css'))
    watch('src/js/**/*.js',   () => gulp.start('app.js'))
})

gulp.task('server', ['watch'], () => {
    gulp.src('dist')
        .pipe(server({
            port: 8080,
            livereload: true,
            open: true
        }))
})