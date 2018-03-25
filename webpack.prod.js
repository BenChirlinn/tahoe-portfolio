// @see https://webpack.js.org/guides/production/

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge({
  // @todo This should probably be disabled long run
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true,
        output: {
          comments: false
        }
      }
    })
  ],
  output: {
    filename: "[name].[hash].js"
  }
});
