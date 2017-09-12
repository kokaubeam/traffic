var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: /src/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
      }, {
        loader: 'postcss-loader',
        options: rucksack({
          autoprefixer: true
        })
      }]
    }, {
      test: /\.css$/,
      exclude: /src/,
      loader: 'style!css'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'bundle.vendor.js' })
  ]
}