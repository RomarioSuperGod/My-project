
var gulp = require('gulp');
var less = require('gulp-less');
var nano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var sync = require('browser-sync').create();


var isDevelopment = true;

gulp.task("img", function() {
    return gulp.src("images/**/*.*")
        .pipe(gulp.dest("dist/img/"));
});

gulp.task("json", function() {
    return gulp.src("src/json/**/*.*")
        .pipe(gulp.dest("dist/json/"));
});

gulp.task('js:own', function () {
    return gulp.src('src/js/main.js')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js:vendor', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/masonry-layout/dist/masonry.pkgd.js',
        'node_modules/bxslider/dist/jquery.bxslider.js',
        'node_modules/flickity/dist/flickity.pkgd.js',
        'node_modules/jquery-validation/dist/jquery.validate.js',
        'node_modules/toastr/build/toastr.min.js',
        'node_modules/datatables.net/js/jquery.dataTables.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulpIf(!isDevelopment, uglify()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css:vendor', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.css',
        'node_modules/bxslider/dist/jquery.bxslider.css',
        'node_modules/flickity/dist/flickity.css',
        'node_modules/toastr/build/toastr.css',
        'node_modules/datatables.net-dt/css/jquery.dataTables.css'

    ])
        .pipe(gulpIf(!isDevelopment, nano()))
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('css:own', function () {
    return gulp.src('src/css/main.less')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(nano())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', ['css:own', 'css:vendor']);
gulp.task('js', ['js:own', 'js:vendor']);

gulp.task('watch', ['build'], function () {
    sync.init({
        server: 'dist'
    });

    gulp.watch('src/css/**/*.less', ['css:own']);
    gulp.watch('src/js/*.js', ['js:own']);
    gulp.watch('dist/js/*.js').on('change', sync.reload);
    gulp.watch('src/index.html', ['html']);
    gulp.watch('dist/index.html').on('change', sync.reload);
    gulp.watch('src/snowwork.html', ['html']);
    gulp.watch('dist/snowwork.html').on('change', sync.reload);
    gulp.watch('src/blog.html', ['html']);
    gulp.watch('dist/blog.html').on('change', sync.reload);
    gulp.watch('src/blogDataTable.html', ['html']);
    gulp.watch('dist/blogDataTable.html').on('change', sync.reload);
});

gulp.task('build', ['html', 'css', 'js', 'img', 'json']);
gulp.task('default', ['build', 'watch']);