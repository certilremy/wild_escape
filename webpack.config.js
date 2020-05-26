const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      }
    },{
      test: /\.mp3$/,
      loader: 'file-loader',
    },{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};