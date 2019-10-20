const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  const isProd = env.prod || false;

  const entry = './src/index.js';
  const output = {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
  };

  // dev
  const devtool = isProd ? false : 'source-map';
  const devServer = {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3001',
    //   },
    // },
  };

  // plugins
  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].min.css',
    }),
    new HtmlWebpackPlugin({
      title: 'Marketplace',
      template: './public/index.html',
      filename: './index.html',
    }),
  ];

  // clean production build
  isProd && plugins.push(new CleanWebpackPlugin());

  // rules
  const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  };

  const scss = {
    test: /\.scss$/,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: { sourceMap: true },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: true },
      },
    ],
  };

  const images = {
    test: /\.(svg|png|jpe?g|gif)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      context: path.resolve(__dirname, 'src/'),
      outputPath: '/images',
      publicPath: '../images',
      useRelativePaths: true,
    },
  };

  const module = {
    rules: [js, scss, images],
  };

  return {
    entry,
    output,
    devtool,
    devServer,
    plugins,
    module,
  };
};
