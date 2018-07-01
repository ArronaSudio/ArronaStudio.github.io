const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const cssnano = require ('gulp-cssnano');
const sourcemaps = require ('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require ('browser-sync').create();

gulp.task('server',['sass', 'babel'], ()=>{
    browserSync.init({
        server:"./"
    });

    gulp.watch('./Dev/ES6/**/*.js',['babel']);
    gulp.watch('./Dev/sass/**/*.scss',['sass']);
    gulp.watch('./*.html').on('change',browserSync.reload);
});

gulp.task('sass', ()=>{
    return gulp.src('./Dev/sass/Style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers:['last 3 versions'],
        cascade:false
    }))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./Public/css'))
    .pipe(browserSync.stream());
});

gulp.task('babel',()=>{
    return gulp.src('./Dev/ES6/main.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./Public/js'))
    .pipe(browserSync.stream());
});

gulp.task('default',['server']);
