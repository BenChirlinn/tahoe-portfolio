// @see https://webpack.js.org/guides/production/

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
