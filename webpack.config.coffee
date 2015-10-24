path    = require 'path'
webpack = require 'webpack'

module.exports =
    entry: './source/coffee/app.coffee'
    output:
        path: path.join __dirname, 'public/javascripts/'
        filename: 'bundle.js'
    module:
        loaders: [
            test: /\.coffee$/, loader: 'coffee-loader'
        ]
    resolve:
        extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
    plugins: [
        new webpack.optimize.UglifyJsPlugin
    ]