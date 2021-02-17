const path = require('path')
const PnpWebpackPlugin = require(`pnp-webpack-plugin`)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}
