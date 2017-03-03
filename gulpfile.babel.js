'use strict';

import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import autoprefixer from 'gulp-autoprefixer';
import eslint from 'gulp-eslint';
import livereload from 'gulp-livereload';
import browserify from 'browserify';
import reactify from 'reactify';
import source from 'vinyl-source-stream';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';

gulp.task('scripts', () => {
  return gulp.src(['client/js/**/*.js', '!node_modules/**'])
        .pipe(eslint('.eslintrc'))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', cb => {
  run('clean', cb);
});

gulp.task('copy_jade', () => {
  return gulp.src('client/views/*.jade')
        .pipe(gulp.dest('build/views'));
});

gulp.task('bundle', () => {
  return browserify({
    entries: './client/js/index.jsx',
    debug: true
  }).transform(reactify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(livereload());
});

gulp.task('server',
    shell.task(['babel-node server.js'])
);

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('client/styles/*.scss', ['styles']);
  gulp.watch('client/js/**/*.jsx', ['build']);
  gulp.watch('client/js/**/*.js', ['build']);
  gulp.watch('client/views/*.jade', ['copy_jade', 'jade']);
});

gulp.task('clean', ['bundle'], (cb) => {
  rimraf('./build', cb);
});

gulp.task('styles', () => {
  return sass('client/styles/scss/*.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('build/css'))
        .pipe(livereload());
});

gulp.task('jade', () => {
  return gulp.src('build/views/*.jade')
        .pipe(livereload());
});

gulp.task('js', () => {
  return gulp.src('build/js/*.js')
        .pipe(livereload());
});

// gulp.task('serve', ['scripts', 'copy_jade', 'build', 'bundle', 'server', 'watch']);
gulp.task('serve', ['scripts', 'copy_jade', 'server', 'watch']);