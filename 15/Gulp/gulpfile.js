const {src, dest, series, parallel, watch} = require('gulp');

function privat(cb){
    console.log('privat');
    cb();
}
function imagemin(cb){
    console.log('image min');
    cb();
}

function publictask(cb) {
    // place code for your default task here
    console.log('public');
    cb();
}
  
exports.publictask = publictask;


function defaultTask(cb) {
    // place code for your default task here
    console.log('Hello gulp and node js');
    cb();
}
  
exports.default = parallel(
    series(privat, imagemin),
    series(defaultTask, publictask)
);

function move(){
    // return src('app/index.html').pipe(dest('dist/'));
    // return src('app/*.html').pipe(dest('dist/'));
    // return src('app/**/*.css').pipe(dest('dist/'));
    return src(['app/**/*.css', 'app/*.html', '!app/index.js']).pipe(dest('dist/'));
}
exports.move = move;

function watchman(){
    watch('app/**/*.css',{delay:3000}, imagemin);
    watch('app/*.js', privat);
    watch('app/*',{events:'addDir'}, function(cb) {
        console.log('New directory created');
        cb();
    });
}

exports.watchman = watchman;

const htmlmin = require('gulp-htmlmin');

function minhtml(){
    return src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
}

exports.minhtml = minhtml;