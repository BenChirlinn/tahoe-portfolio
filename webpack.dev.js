// @see https://webpack.js.org/guides/production/

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require("webpack");
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () =>
                  autoprefixer({
                    overrideBrowserslist: ["last 3 versions", "> 1%"]
                  })
              }
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.UNDER_CONSTRUCTION": false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static"
    })
  ],
  devServer: {
    // contentBase: parentDir,
    historyApiFallback: true
  }
});
