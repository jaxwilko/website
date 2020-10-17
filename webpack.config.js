const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    entry: {
        app: './src/app.js',
        sass: './src/scss/app.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    target: "web",
    mode: "development",
    node: {
        fs: "empty"
    },
    watchOptions: {
        aggregateTimeout: 150,
        poll: 500
    },
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: []
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
};
