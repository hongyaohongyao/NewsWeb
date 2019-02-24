const path = require('path')
const webpack = require("webpack")
module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: 'jquery'
				}, {
					loader: 'expose-loader',
					options: '$'
				}]
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'less-loader'
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	}
}
