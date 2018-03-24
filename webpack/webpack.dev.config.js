var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // plugins: [
            //   'transform-object-rest-spread',
            //   'transform-runtime'
            // ],
            // cacheDirectory: true,
          }
        }
      },
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //     loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //     loader: "less-loader" // compiles Less to CSS
      //   }]
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // devServer: {
  //   contentBase: parentDir,
  //   historyApiFallback: true
  // }
}
