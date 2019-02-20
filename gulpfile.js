const {series, parallel} = require('gulp');

let a = ['a', 'b', 'c', 'd', 'e'];

function make(cb) {
    const res = a.reduce();
    cb();
}

function finish(cb) {
    cb();
}

exports.finish = parallel(make, finish);
exports.make = series(make, finish);