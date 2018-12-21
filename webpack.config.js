const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'modal_app_download.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HotGo - ¡Descargá nuestra aplicación!',
      template: './src/index.html',
      filename: 'modal_app_download.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
      }
    ]
  }
};