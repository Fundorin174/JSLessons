const path = require('path');
const HtmlWeppackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'),
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],

  },
  plugins: [
    new HtmlWeppackPlugin({ title: 'Gradient generator', filename: 'index.html', template: './src/index.html' }),
  ]
}