'use strict'

var path = require('path');
var webpack = require('webpack');

module.exports = {

	// Entry point for the bundle, path and filename to main module
	// entry: './test/ArtistSpec',

	// output: {
	// 	path: './test',
	// 	filename: '../dist/spec.js',
	// 	publicPath: '/test/'
	// },

	entry: {
		test: './test/ArtistSpec',
		main: ['./src/Artist']
	},
	output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].entry.js"
    },
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
};