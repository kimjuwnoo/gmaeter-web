// gulpfile.js
const { src, dest } = require('gulp');

function copyHTML() {
  return src('src/*.html').pipe(dest('dist'));
}

exports.default = copyHTML;


git config --global user.name "akak1724"
git config --global user.email "akak1724@gmail.com"

