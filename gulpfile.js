const { watch,parallel } = require('gulp');
const less2css = require('./build/gulp/less2acss');
const { createDev, createProd, createTest } = require('./build/gulp/init');

const watchLess = function () {
  watch('pages/**/*.less', less2css);
};

// exports.less2Css = watchLess

module.exports = {
  dev: parallel(watchLess,createDev),
  prod: createProd,
  test: createTest,
};
