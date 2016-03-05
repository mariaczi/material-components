var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        root: path.resolve('./')
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                exclude: /\.snippet\.html$/,
                loader: 'html'
            },
            {
                test: /\.snippet\.html$/,
                loader: 'html!highlightjs?lang=html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
            }/*,
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }*/
        ]
    }
};