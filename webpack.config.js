const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: join(__dirname, 'node_modules')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src/template.html')
    })
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}
