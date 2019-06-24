const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: "none",
    // entry: "./src/index.js",
    entry: {
      main: "./src/index.js",
      vendor: "./src/vendor.js"
    },
    // plugins: [new HtmlWebpackPlugin({
    //   template: "./src/template.html"
    // })],
    plugins: [
      new MiniCssExtractPlugin ({
        filename: '[name].[contentHash].css'
      }), 
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true
        }  // минификация index.html
      })
    ],
    module: {
        rules: [
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':xlink:href', ':src', ':href']
              }
            }
            // use: ["html-loader"]
          },
          {
            test: /\.(svg|png|jpg|gif)/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, //3. Extract css into file
              "css-loader", //2. Turns css into commonjs
              "sass-loader" //1. Turns sass into css
            ]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ]
    },
}