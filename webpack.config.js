const HtmlWebpackPlugin = require('html-webpack-plugin')

let webpackConfig = {
  entry: './app/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      },
      {
        test: /\.scss?/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Polly',
      template: './app/assets/index.ejs'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(require('./webpack-prod.js'))
} else {
  webpackConfig.devServer = require('./webpack-dev.js')
}

module.exports = webpackConfig
