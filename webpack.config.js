/**
 * Webpack Constants
 */
const webpack = require('webpack');
const Helpers = require('./resources/assets/config/helpers');
const METADATA = {
	title: 'Travysta | Explore Universe',
	baseUrl: '/',
	isDevServer: Helpers.isWebpackDevServer()
}
/**
 * Webpack Plugins
 */

const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Webpack Configuration
 */

module.exports = {
	/**
	 * Static METADATA for index.html
	 */
	
	metadata: METADATA,
	entry: {
		'client': './resources/assets/client.browsers.js',
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
		      from: './resources/assets/client/images/',
		      to: './images/',
		    },
		    {
		      from: './resources/assets/client/icons/',
		      to: './icons/',
		    }
		    // {
		    //   from: './resources/assets/manifest.json',
		    //   to: 'public/manifest.json',
		    // }
	    ])
    ],
	debug: true,
	output: {
		path: './public/assets/client/dist/',
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js',
	}
}


