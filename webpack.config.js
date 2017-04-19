const path = require('path');

module.exports = {
	entry: './src/main.ts',
	output: {
		filename: './public/dist/angular-ts.js',
		path: __dirname
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
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	devtool: 'inline-source-map',
	devServer: {
		publicPath: path.join(__dirname, 'public'),
		contentBase: path.join(__dirname, 'public'),
		port: 8080
	}
};
