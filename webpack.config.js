const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const outputDirectory = "/build";
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src']
              }
            }
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[path][name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    },
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
      template: "./public/index.html",
      favicon: './public/favicon.ico'
    })
  ]
};