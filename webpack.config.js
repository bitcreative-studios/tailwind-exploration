const path = require('path')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevMode = process.env.NODE_ENV !== 'production'
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './',
  mode: isDevMode ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  resolve: {
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
}
