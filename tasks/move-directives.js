/*! move-directive.js © yamoo9.net, 2016 */
'use strict';

let gulp        = require('gulp');
let config      = require('../config');

gulp.task('move-directives', () => {
  let path = global.y9_build ?
              config.paths.directives.output.replace(config.paths.dist, config.paths.build) :
              config.paths.directives.output;
  return gulp.src( config.paths.directives.source )
             .pipe( gulp.dest( path ) );
});
