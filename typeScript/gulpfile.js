const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.js')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject()) // processo de compilação
        .pipe(gulp.dest('build')) 
}

exports.default = series(transformacaoTS)

