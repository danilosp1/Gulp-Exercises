const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback){
    gulp.src('src/**/*.js')
        .pipe(babel({
            // babel passa o js para sintaxes mais suportadas
            comments: false,
            presets: ["env"] // pega js mais novo
        }))
        .pipe(uglify()) // minifica o código
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // param é o nome do arquivo de saída
        .pipe(gulp.dest('build'))

    return callback()
}

function fim(callback){
    console.log('Fim!')
    return callback()
}

exports.default = series(padrao, fim)