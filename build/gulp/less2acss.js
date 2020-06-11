const rename = require('gulp-rename');
const less = require('gulp-less');
const csso = require('gulp-csso');
const { src, dest } = require('gulp');
const LessAutoPrefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoPrefix({browsers:['last 2 versions']});



const less2css = function () {
  return src('pages/**/*.less')
    .pipe(less({
      plugins:[autoprefix],
    }))
    .pipe(csso())
    .pipe(
      rename(function (path) {
        path.extname = '.acss';
      })
    )
    .pipe(
      dest(
        function (file) {
          return file.base;
        },
        [{ overwrite: true }]
      )
    );
};

module.exports = less2css;