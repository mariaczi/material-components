var config = require('./webpack.config.js');

var webpack = require('webpack');
var optimist = require('optimist');
var pkg = require('./package.json');

var ENV = optimist.argv.env || 'dev';
var dir = ENV === 'docs' ? 'docs' : 'dist';
var fileName = (ENV === 'dist') ? 
    `./${dir}/${pkg.name}.min` : 
    `./${dir}/${pkg.name}`;

/**
 * Entry + output
 */
if (ENV !== 'docs') {
    config.entry = './src/components/index.ts';

    config.output = {
        filename: `${fileName}.js`,
        library: pkg.library,
        libraryTarget: 'umd'
    };
}
else {
    config.entry = './src/docs/index.ts';

    config.output = {
        filename: `${fileName}.js`,
        library: `${pkg.library}docs`,
        libraryTarget: 'umd'
    };
}

/**
 * ENV
 */
config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: `"${ENV}"`
    }
}));

/**
 * Dist
 */
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
if (ENV !== 'dist') {
    config.devtool = 'source-map'
}

module.exports = config;
