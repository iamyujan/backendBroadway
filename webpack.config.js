const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    target: 'node',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname),
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}