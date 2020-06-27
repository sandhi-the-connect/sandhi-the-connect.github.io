var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('reload', function (onDoneCallback) {
    browserSync.reload();
    onDoneCallback();
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./src",
        notify: false,
        ghostMode: false,
    });

    gulp.watch("./src/*.html", gulp.series('reload'));
    gulp.watch("./src/js/*.js", gulp.series('reload'));
    gulp.watch("./src/res/**/*", gulp.series('reload'));
    gulp.watch("./src/scss/*.scss", gulp.series('sass'));
});

gulp.task('sass', function (done) {
    return gulp.src("./src/scss/*.scss").pipe(sass()).pipe(gulp.dest("./src/css")).pipe(browserSync.stream());
});

gulp.task('default', gulp.series('sass', 'serve'));