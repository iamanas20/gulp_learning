const {series, parallel} = require('gulp');

function make(cb) {
    cb();
}

function finish(cb) {
    cb();
}

exports.series = parallel(make, finish);