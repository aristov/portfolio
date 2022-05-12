const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports = module.exports = {
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
          process.env.NODE_ENV === 'production' ?
            MiniCssExtractPlugin.loader :
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

if(process.env.NODE_ENV === 'production') {
  exports.plugins = [
    new MiniCssExtractPlugin({ filename : 'index.bundle.css' }),
  ]
}
