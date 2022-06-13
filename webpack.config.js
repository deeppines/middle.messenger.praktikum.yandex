const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/pages/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'src': path.resolve(__dirname, './src'),
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/style/'
          }
        }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/icons',
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/pages/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/static',
          to: 'assets/static'
        }
      ]
    })
  ]
}