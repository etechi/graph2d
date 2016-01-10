/// <binding AfterBuild='debug' Clean='clean' />
var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var typedoc = require("gulp-typedoc");
var merge = require("merge2");
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');
gulp.task('default', ['build-release']);


gulp.task('build', function () {
    var tsProject = ts.createProject('./tsconfig.json');
    var re = tsProject.src()
      .pipe(sourcemaps.init()) 
      .pipe(ts(tsProject));
    var js = re.js;
    return merge([
        js.pipe(gulp.dest('./dist')),
        re.dts.pipe(gulp.dest('./dist')),
    ]);
});
gulp.task('build-release', function () {
    var tsProject = ts.createProject('./tsconfig.json', { outFile: "graph2d.min.js" });

    var re = tsProject.src()
      .pipe(sourcemaps.init())
      .pipe(ts(tsProject));
    var js = re.js;
    js=js.pipe(uglify());
    return merge([
        js.pipe(gulp.dest('./dist/')),
    ]);
});
gulp.task("doc", function () {
    return merge([
        gulp.src('lib/*.ts'),
    ]).pipe(typedoc({
        module: "commonjs",
        target: "es5",
        out: "docs/",
        name: "Graph2D",
        theme: "minimal",
        excludeExternals: true
    }))
    ;
});

gulp.task('clean', function () {
    gulp.src("lib/**/*.js", { read: false })
   .pipe(clean());
    gulp.src("lib/**/*.js.map", { read: false })
   .pipe(clean());
});

gulp.task('test',["build"], function () {
    return gulp.src("test/**/*.js", { read: false })
        .pipe(mocha({ reporter: 'nyan' }));
});
