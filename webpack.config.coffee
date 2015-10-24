path = require 'path'

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