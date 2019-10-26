var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    ts = require('gulp-typescript'),
    node;

var tsProject = ts.createProject("tsconfig.json");


gulp.task('typescript', () => {
    console.log('Compile TypeScript to javascript');

    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('start_node', gulp.series('typescript'), () => {
    if (node) {
        node.kill();
    }
    node = spawn('node', ['app.js'], { stdio: 'inherit' });
});

gulp.task('watch', () => {
    gulp.watch('*.ts', gulp.series('start_node'));
});

gulp.task('default', gulp.series('watch', 'typescript', 'start_node'));