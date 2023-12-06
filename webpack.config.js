import './app/env.js'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'

const BUNDLE_KEY = process.env.NODE_ENV === 'production' ?
  '[contenthash]' :
  'bundle'

const config = {
  mode : 'none',
  entry : './src/index.js',
  output : {
    path : new URL('public/static', import.meta.url).pathname,
    publicPath : '/static/',
    filename : `main.${ BUNDLE_KEY }.js`,
    clean : true,
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
  externals : {
    lodash : '_',
    luxon : 'luxon',
  },
  plugins : [
    new WebpackManifestPlugin({}),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
  infrastructureLogging : {
    level : 'warn',
  },
  devtool : 'inline-source-map',
}

if(process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.optimization = {
    minimize : true,
  }
  config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename : `main.${ BUNDLE_KEY }.css`,
    }),
  ]
}

export default config
