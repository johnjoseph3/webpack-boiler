var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	output: {
		path: './dist',
		publicPath: '',
		filename: 'bundle.js'
	},
	resolve: {
		root: [SRC, NODE_MODULES]
	},
	module: {
		preLoaders: [{
			test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
		],
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel']
			},
			{
				test: /\.jade$/,
				loader: 'jade'
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file' // Fonts --- Untested
			},
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			// favicon: 'favicon.ico',
			template: './src/client/index.jade'
		})
	]
}
