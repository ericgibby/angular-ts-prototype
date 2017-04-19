const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.join(__dirname, 'dist');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

const html = new HtmlWebpackPlugin({
	filename: 'index.html',
	template: './src/index.html'
});

const vendorChunk = new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	minChunks: (module) => {
		return module.context && module.context.indexOf('node_modules') !== -1;
	}
});

const manifestChunk = new webpack.optimize.CommonsChunkPlugin({
	name: 'manifest'
});

module.exports = {
	entry: {
		main: './src/main.ts'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: outputPath
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' }
					],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractSass,
		html,
		vendorChunk,
		manifestChunk
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	devtool: 'inline-source-map',
	devServer: {
		publicPath: path.join(__dirname, 'dist'),
		contentBase: path.join(__dirname, 'dist'),
		port: 8080
	}
};
