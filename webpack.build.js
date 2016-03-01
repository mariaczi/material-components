var config = require('./webpack.config.js');

var webpack = require('webpack');
var optimist = require('optimist');
var pkg = require('./package.json');

var ENV = optimist.argv.env || 'dev';
var fileName = (ENV === 'dist') ? 
    './dist/' + pkg.name + '.min' : 
    './dist/' + pkg.name;

/**
 * Output
 */
config.output = {
    filename: fileName + '.js',
    library: pkg.library,
    libraryTarget: 'umd'
};

/**
 * ENV
 */
config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: '"' + ENV + '"'
    }
}));

// plugins for production
if (ENV === 'dist') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    }))
}
/**
 * devtool
 */
if (ENV === 'dev') {
    config.devtool = 'source-map'
}

module.exports = config;
