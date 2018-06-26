const webpack = require('webpack'); 
const path = require('path');

module.exports = {
    entry: {
        app: './app/index.entry.js',
        // vendors: './app/vendors.js'
    },
    output: {
        filename: '[name].js',
        // path: __dirname,
        path: path.resolve(__dirname, './')
    },
    module: {
        rules: [
            {
                test: /\.css$|\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
}