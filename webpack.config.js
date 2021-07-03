const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
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
    ],
  },

  devServer: {
    port: 3000,
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
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    // new Dotenv({
    //   path: './.env',
    // }),
  ],
}
