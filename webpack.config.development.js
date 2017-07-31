var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      './public/js/app/App.js'
    ],
    common: ['react', 'react-bootstrap']
  },
  output: {
    path: path.resolve(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 3
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader']
    },
    { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 10 version'},
  ]}
}
