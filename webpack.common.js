// @see https://webpack.js.org/guides/production/

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-object-rest-spread',
              'transform-runtime'
            ],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,  
        use: {
          loader: 'url-loader',
          options: { 
            limit: 8192, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          } 
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
            limit: 50000,
          },
        },
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      // favicon: './images/icons/favicon.ico',
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: process.env.NODE_ENV === "development"
    }),
    new FaviconsWebpackPlugin('./src/images/my-logo.png')
  ]
};
