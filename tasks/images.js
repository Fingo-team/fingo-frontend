/*! images.js © yamoo9.net, 2016 */
'use strict';

// process.setMaxListeners(1000);

// [참고 URL]
// https://www.npmjs.com/package/gulp-imagemin

let gulp     = require('gulp');
let imagemin = require('gulp-imagemin');
var imageminJpegtran = require('imagemin-jpegtran');
var imageminOptipng = require('imagemin-optipng');
var imageminSvgo = require('imagemin-svgo');
let config   = require('../config');

gulp.task('images', () => {
  let path = global.y9_build ?
              config.paths.images.output.replace(config.paths.dist, config.paths.build) :
              config.paths.images.output;

  return gulp.src( config.paths.images.source )
             .pipe( imagemin( [
               imageminJpegtran(),
               imageminOptipng(),
               imageminSvgo({'plugins': [{'removeViewBox': false}, {'minifyStyles': false}]})
             ] ), {'verbose': true} )
             .pipe(gulp.dest( path ));
});
