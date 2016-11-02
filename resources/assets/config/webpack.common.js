/**
 * [webpack description]
 * @author: Simstream T&D
 */

const webpack = require('webpack');
const Helpers = require('./helpers');

/**
 * Webpack Plugins
 */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Constants
 */

const METADATA = {
	title: 'Travysta | Explore Universe',
	baseUrl: '/',
	isDevServer: Helpers.isWebpackDevServer()
}

/**
 * Webpack Configuration
 */

module.exports = {
	/**
	 * Static METADATA for index.html
	 */
	
	metadata: METADATA,
	entry: {
		'vendor': './src/vendor.browser.js'
	},
	/**
	 * Modules Loaders
	 */
	
	module: {
		loaders: [
	      {
	        test: /\.scss$/,
	        loaders: ["style", "css", "sass"]
	      },
	      { 
	      	test: /\.(jpe?g|png|gif|svg)$/i,    
	      	loader: "url-loader?limit=10000&minetype=image/jpg" 
	      },
	      { 
	      	test: /\.css$/, 
	      	loader: "style-loader!css-loader" 
	      },
		  {
			test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
			loader: 'url-loader'
		  }
	    ]
	},
	sassLoader: {
		includePaths: [Helpers.root('./node_modules/compass-mixins/lib')]
	},
	resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        },
    },

	plugins: [
		/**
		 * Copy the non-bundled assets to ./dist folder
		 */
		new CopyWebpackPlugin([
			{
		      from: './src/assets/images/',
		      to: 'assets/images',
		    },
		    {
		      from: './src/assets/icons/',
		      to: 'assets/icons',
		    },
		    {
		      from: './src/assets/manifest.json',
		      to: 'assets/manifest.json',
		    }
	    ])
    ]
}

