const { series, parallel,  src, dest} = require('gulp');
const babel = require('gulp-babel');

function transpile(cb) {
    // body omitted
    cb();
}

function bundle(cb) {
    // body omitted
    cb();
}
function css(cb){
    cb();
}

function imgopt(cb){
    cb();
}
function babelGo() {
    return src('src/*.js')
        .pipe(babel())
        .pipe(dest('output/'));
}


exports.default = series(imgopt, parallel(transpile, bundle,), css);
exports.babel = series(babelGo);
