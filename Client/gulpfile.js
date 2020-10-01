var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');
var run = require('gulp-run');


//No hace falta. Npm run dev arranca el servidor y el cliente a la vez desde package json
//El procesamiento scss ya esta activado

gulp.task('Node', function (done) {
  nodemon({
    script: '../Server/index.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  , done: done
  })

});

/*

gulp.task('React', function(){
  return run('npm start').exec()    // run "npm start".
      .pipe(gulp.dest('output'));

});



gulp.task('default', gulp.series('React', 'Node'))
*/
