const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: "./build",
        port: 9000
    }
}

