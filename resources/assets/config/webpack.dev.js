/**
 * @Webpack
 * [common Configuration]
 */
const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

/**
 * Webpack Plugins
 */

const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Webpack Constants
 */

const ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');

module.exports = webpackMerge(commonConfig, {
	debug: true,
	output: {
		path: helpers.root('dist/'),
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js',
	}
})





