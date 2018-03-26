// @see https://webpack.js.org/guides/production/

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            { 
              loader: 'postcss-loader', 
              options: {
                plugins: () => autoprefixer({
                  browsers: ['last 3 versions', '> 1%']
                })
              }
            },
            {
              loader: "less-loader"
            }
          ]
        })
      }
    ]
  },
  // @todo This should probably be disabled long run
  // devtool: 'source-map',
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
