const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const EslintWebPackPlugin = require('eslint-webpack-plugin')
const dotenv = require('dotenv')
const webpack = require('webpack')

const config = {
	entry: path.resolve(__dirname, './src/index.jsx'),
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, '/dist'),
		publicPath: './',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg/,
				type: 'asset/inline',
			},
		],
	},
	devServer: {
		port: 3000,
		hot: true,
		historyApiFallback: true,
		publicPath: '/',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
			'default-src': '*',
		},
	},
	plugins: [
		new EslintWebPackPlugin({
			emitWarning: true
		}),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
	],
}

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.devtool = 'cheap-module-source-map'
	}
	if (argv.mode === 'production') {
		config.devtool = 'source-map'
	}
	const currentPath = path.join(__dirname)
	const basePath = currentPath + `/.env.${argv.mode}`
	const fileEnv = dotenv.config({ path: basePath }).parsed
	const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
		return prev
	}, {})
	config.plugins = [...config.plugins, new webpack.DefinePlugin(envKeys)]
	return config
}
