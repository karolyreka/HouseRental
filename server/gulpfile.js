 var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  gulpMocha = require('gulp-mocha');

gulp.task('default', function() {
  nodemon({
      script: 'index.js',
      ext: 'js',
      env: {
        PORT: 9010
      },
      ignore: ['./node_modules/**']
    })
    .on('restart', function() {
      console.log('restarting yuhuu');
    });
});

gulp.task('test', function(){
  gulp.src('tests/*.js', {read:false})
  .pipe(gulpMocha({reporter: 'nyan'}))
})
