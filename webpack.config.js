'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source',
	
	entry: [
		path.join(__dirname, 'app/frontend')
	],
	
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'frontend.js',
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			}
		]
	}
}
