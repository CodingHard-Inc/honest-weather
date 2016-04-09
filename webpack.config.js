module.exports = {
  entry: "./app/app.js",
  output: {
    path: './public',
    filename: "bundle.js",
    publicPath: '/'
  },
  // webpack-dev-server config for refreshing and more
  devServer: {
    inline: true,
    contentBase: './public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'
      },
      {
        test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
}