const _config = require('./webpack.config.base')
const webpack = require('webpack')
const path = require('path')
const config = Object.assign({
    mode: 'production'
}, _config)

const plugins = [
    new webpack.HotModuleReplacementPlugin()
]

config.plugins.push(...plugins)

module.exports = config