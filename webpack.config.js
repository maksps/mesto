
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/script/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'image/[name].[hash][ext]'
        }
      },
        {
           test: /\.css$/,
           use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader'},]
        }
    ]
  } 
}


