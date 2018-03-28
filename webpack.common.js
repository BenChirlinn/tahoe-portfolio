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
      filename: "./index.html",
      meta: {
        description: "Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area",
        author: "Benjamin Chirlin" ,
        viewport: "width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1",
        // Facebook https://developers.facebook.com/docs/sharing/best-practices/
        "og:title": "Benjamin Chirlin - Web Developer",
        "og:image": "images/social/fb-image.jpg",
        "og:description": "Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area",
        // Twitter https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
        "twitter:card": "summary_large_image",
        "twitter:site": "@benchirlin",
        "twitter:creator": "@benchirlin",
        "twitter:title": "Benjamin Chirlin - Web Developer",
        "twitter:description": "Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area",
        "twitter:image": "images/social/twitter-image.jpg",
        "twitter:image:alt": "Minimalist mountain landscape with a sun overlaid with 'Benjamin Chirlin, Web Developer'"
        // @todo add schema for Google+ and elsewhere http://schema.org/ 
        // maybe a collection page for home? http://schema.org/CollectionPage -->
      }
    }),
    new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: process.env.NODE_ENV === "development"
    }),
    new FaviconsWebpackPlugin('./src/images/my-logo.png')
  ]
};
