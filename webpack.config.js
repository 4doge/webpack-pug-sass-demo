const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.njk$/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['./src/templates'],
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'another.html',
      template: './src/templates/another.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'more.html',
      template: './src/templates/more.njk'
    })
  ]
};