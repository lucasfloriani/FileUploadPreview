const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    upload: ['babel-polyfill', './src/js/upload.js']
  },
  output: {
    filename: 'file-[name].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['babel-preset-env',
              {
                targets: {
                  browsers: ['last 4 versions', 'safari >= 7', 'ie >= 11']
                },
                debug: true
              }
            ]
          ]
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 4 versions', '> 1%']
              },
              plugins: () => [
                autoprefixer
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
