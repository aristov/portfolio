import './app/env.js'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const exports = {
  mode : 'none',
  entry : './src/index.js',
  output : {
    path : new URL('public/static', import.meta.url).pathname,
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
      directory : new URL('public', import.meta.url).pathname,
    },
    hot : true,
    historyApiFallback : true,
    client : {
      logging : 'none',
    },
  },
  externals : {
    luxon : 'luxon',
  },
  plugins : [
    new webpack.EnvironmentPlugin(['API_HOST_URL']),
  ],
}

if(process.env.NODE_ENV === 'production') {
  exports.plugins.push(
    new MiniCssExtractPlugin({ filename : 'index.bundle.css' }),
  )
}

export default exports
