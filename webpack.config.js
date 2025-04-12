const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              name: 'assets/images/[name].[hash:8].[ext]',
              quality: 75,
              sizes: [480, 768, 1024, 1600, 1920],
              placeholder: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production',
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: true },
              pngquant: { quality: [0.6, 0.8], speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
      },

      {
        test: /\.(mp4|webm|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash:8][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'head',
      favicon: './public/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
        description: 'Monthly 35/16mm double feature at Filmrauschpalast Berlin.',
        'og:title': 'Zelluloid 42',
        'og:description': 'Berlin’s 35mm underground double-feature cult night.',
        'og:type': 'website',
        'twitter:card': 'summary_large_image',
      },
      title: 'Zelluloid 42',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: false,

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      "X-Content-Type-Options": "nosniff",
    },
  },

  resolve: {
    extensions: ['.js', '.json'],
  },
};
