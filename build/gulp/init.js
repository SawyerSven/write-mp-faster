const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const config = require('../../config/env/index');

const genrateFileName = 'env-config';

const createDev = function () {
  return src(config.dev)
    .pipe(
      rename(function (path) {
        path.basename = genrateFileName;
      })
    )
    .pipe(dest(config.dist));
};
const createProd = function () {
  return src(config.prod)
    .pipe(
      rename(function (path) {
        path.basename = genrateFileName;
      })
    )
    .pipe(dest(config.dist));
};
const createTest = function () {
  return src(config.test)
    .pipe(
      rename(function (path) {
        path.basename = genrateFileName;
      })
    )
    .pipe(dest(config.dist));
};

module.exports = {
  createDev,
  createProd,
  createTest,
};
