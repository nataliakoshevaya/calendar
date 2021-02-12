const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new TerserPlugin(),
      new OptimizeCssAssetPlugin(),
    ];
  }
  return config;
};

module.exports = {
  mode: 'development',
  entry: {
    calendar: ['@babel/polyfill', './src/calendar/index.js'],
    form: ['@babel/polyfill', './src/form/form.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', 'scss'],
  },
  optimization: optimization(),
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'calendar.html',
      template: './src/calendar/index.html',
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        collapseWhitespace: isProd,
      },
      chunks: ['calendar'],
    }),
    new HtmlWebpackPlugin({
      filename: 'form.html',
      template: './src/form/form.html',
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        collapseWhitespace: isProd,
      },
      chunks: ['form'],
    }),
    new CleanWebpackPlugin({
      // dry: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CopyPlugin({ patterns: [{ from: path.resolve(__dirname, './src/favicon.ico'), to: path.resolve(__dirname, 'dist/favicon.ico') }] }),

  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
