const path = require('path')

module.exports = {
  mode : 'none',
  entry : './src/index.js',
  output : {
    path : path.join(__dirname, 'public/static'),
    publicPath : '/static/',
    filename : 'index.bundle.js',
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader : 'css-loader',
            options : {
              importLoaders : 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test : /\.(eot|svg|ttf|woff|woff2)$/,
        type : 'asset/resource',
      },
    ],
  },
  devServer : {
    static : {
      directory : path.join(__dirname, 'public'),
    },
    hot : true,
    historyApiFallback : true,
    client : {
      logging : 'none',
    },
  },
}
