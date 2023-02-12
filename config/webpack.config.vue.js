const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../client/Vue/src', 'main.js'),
  output: {
    path: path.resolve(__dirname, '../client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
        // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/Vue/src', 'index.html'),
    }),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],
};

