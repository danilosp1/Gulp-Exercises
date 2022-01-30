// Entrar na pasta e rodar "gulp" no terminal

const gulp = require('gulp')
const { series, parallel } = require('gulp')

// callback é passada pelo próprio gulp
const antes1 = callback => {
    console.log('Tarefa antes 1!')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa antes 2!')
    return callback()
}

function copiar(callback){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB')) // aplicar transformações nos arquivos selecionados

    return callback()
}

const fim = callback => {
    console.log('Tarefa final!')
    return callback()
}

// gulp precisa de uma task default definida
module.exports.default = series( // sequencial -> um começa e finaliza, outro começa e finaliza... um de cada vez

    parallel(antes1, antes2), // paralelo -> todos começam juntos
    copiar,
    fim
)
