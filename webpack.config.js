
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  ] 
}


