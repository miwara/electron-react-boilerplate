let webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
