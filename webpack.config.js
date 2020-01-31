const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const fileLoaderConfig = {
  loader: require.resolve('file-loader'),
  options: {
    publicPath: '/',
    esModule: false
  }
}

module.exports = {
  entry: {
    app: path.join(__dirname, 'resources/js/app.js')
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new OptimizeCssAssetsPlugin()
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    hot: true,
    inline: true,
    proxy: {
      '*': 'http://[::1]:8080'
    }
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
        ...fileLoaderConfig
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        ...fileLoaderConfig
      },
      {
        test: /.(woff2?|eot|ttf|otf)(\?.*)?$/,
        ...fileLoaderConfig
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
