const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: path.join(__dirname, '/src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
    chunkFilename: 'hello[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [path.resolve(__dirname, 'src/client/')],
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/client/')],
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src/client/')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [HtmlWebpackPluginConfig],
};
