var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    "./js/spotify-react.js"
  ],
  output: {
    path: __dirname + '/build',
    filename: "spotify-react-bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js?$/, loaders: ['babel-loader'], exclude: /node_modules/},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
