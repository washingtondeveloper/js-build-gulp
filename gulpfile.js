const gulp = require('gulp')
const sequence = require('run-sequence')

require('./gulp/app')
require('./gulp/server')

gulp.task('default', () => {
    sequence('app', 'server')
})