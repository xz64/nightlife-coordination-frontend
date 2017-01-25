var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var outputDir = 'dist';

var config = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
        
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }

        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:8081'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.template.ejs'),
      title: 'Nightlife Coordination'
    }),
    new CleanWebpackPlugin([outputDir])
  ]
};

module.exports = function(env) {
  if (env === 'prod') {
    config.plugins.push(new UglifyJSPlugin());
  }
  return config;
};
