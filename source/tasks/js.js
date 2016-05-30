'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

export default () => {

    return gulp.src([
        './'+config.paths.source+'/js/**/*.js'
        ]).pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
            .on('error', notify.onError(function (error) {
                return { icon:false, title:'JS ERROR ON LINE '+error.loc.line, message:error.message.replace(/(.\.js:)( .)/,"$1\n$2") };
            }))
            .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'+config.paths.test+'/assets/js'));
}
