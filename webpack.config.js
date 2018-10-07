const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    publicPath: 'http://localhost:8080/dist/',
    historyApiFallback: true,
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      OWM_BASE_URL: JSON.stringify('http://api.openweathermap.org/data'),
      OWM_ICON_BASE_URL: JSON.stringify('http://openweathermap.org/img/w'),
      OWM_VERSION: JSON.stringify('2.5'),
      OWM_API_KEY: JSON.stringify('eb0cbe452a9030be412c4819637ce278'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  }
};
