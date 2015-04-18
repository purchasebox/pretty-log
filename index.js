require('colors');

exports.error = function (msg) {
    console.log('[ERROR] '.red + msg)
};

exports.warn = function (msg) {
    console.log('[WARN] '.yellow + msg)
};

exports.info = function (msg) {
    console.log('[INFO] '.green + msg)
};

exports.debug = function (msg) {
    console.log('[DEBUG] '.cyan + msg)
};