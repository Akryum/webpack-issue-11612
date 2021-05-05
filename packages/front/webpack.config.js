const path = require('path')

/** @type {import('webpack').Configuration} */
const config = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    front: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@components': '@my-app/components/src'
    },
    symlinks: false
  },
  cache: true
}

module.exports = config
