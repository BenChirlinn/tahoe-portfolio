// @see https://webpack.js.org/guides/production/

const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
              'transform-react-jsx-img-import',
              'transform-object-rest-spread',
              'transform-runtime'
            ],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\/images\/.+\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[ext]',
            limit: 50000,
          },
        },
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      // favicon: './images/icons/favicon.ico',
      filename: './index.html',
      title: 'Benjamin Chirlin - Web Devloper',
      appMountId: 'app',
      meta: [
        {
          name: 'description',
          content: 'Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area'
        },
        {
          name: 'author',
          content: 'Benjamin Chirlin'
        },
        {
          name: 'viewport',
          content: 'width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1'
        },
        // Facebook https://developers.facebook.com/docs/sharing/best-practices/
        {
          name: 'og:title',
          content: 'Benjamin Chirlin - Web Developer'
        },
        {
          name: 'og:image',
          content: './src/images/social/fb-image.jpg'
        },
        {
          name: 'og:description',
          content: 'Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area'
        },
        // Twitter https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@benchirlin'
        },
        {
          name: 'twitter:creator',
          content: '@benchirlin'
        },
        {
          name: 'twitter:title',
          content: 'Benjamin Chirlin - Web Developer'
        },
        {
          name: 'twitter:description',
          content: 'Personal portfolio website for Benjamin Chirlin, web developer in the Bay Area'
        },
        {
          name: 'twitter:image',
          content: './src/images/social/twitter-image.jpg'
        },
        {
          name: 'twitter:image:alt',
          content: 'Minimalist mountain landscape with a sun overlaid with \'Benjamin Chirlin, Web Developer\''
        },
        // @todo add schema for Google+ and elsewhere http://schema.org/
        // maybe a collection page for home? http://schema.org/CollectionPage -->
      ]
    }),
    new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        disable: process.env.NODE_ENV === 'development'
    })
  ]
};
