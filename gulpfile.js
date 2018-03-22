var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
gulp.task('default', () =>
    gulp.src('nodeuii/**/*.js')
        .pipe(babel({
            babelrc:false,
            plugins:["transform-es2015-modules-commonjs"]
        }))
        .pipe(gulp.dest('build'))
);