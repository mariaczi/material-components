var config = require('./webpack.config.js');

var webpack = require('webpack');
var optimist = require('optimist');
var pkg = require('./package.json');

var ENV = optimist.argv.env || 'dev';

/**
 * Entry + output
 */
if (ENV === 'dist') {
    config.entry = './src/components/index.ts';

    config.output = {
        filename: `./dist/${pkg.name}.min.js`,
        library: `${pkg.library}`,
        libraryTarget: 'umd'
    };
}
else {
    config.entry = './src/docs/index.ts';

    config.output = {
        filename: `./docs/${pkg.name}.js`,
        library: `${pkg.library}Docs`,
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
