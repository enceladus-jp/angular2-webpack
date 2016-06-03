var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    // ここでTypescriptのTsLintを設定
    preLoaders: [{
      test: /\.ts(x?)$/,
      exclude: /(node_modules|bower_components)/,
      include: __dirname,
      loader: 'tslint'
    }],
/*    preLoaders: [
      loaders.tslint,
    ],*/
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
