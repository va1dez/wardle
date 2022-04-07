const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("css-minimizer-webpack-plugin");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "/",
    },
    node: false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"], // ensure compatibility with older browsers
              plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11
            },
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "webpack-remove-debug", // remove "debug" package
        },
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "assets/css/[name].[contenthash:8].css",
          chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
        }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        )
      }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public/index.html"),
          inject: true
      })
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        }),
        new OptimizeCssAssetsPlugin()
      ],
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            }
          },
          common: {
            minChunks: 2,
            priority: -10
          }
        }
      },
      runtimeChunk: "single"
    },
    devServer: {
      proxy: {
        '/': 'http://localhost:80',
      },
      compress: true,
      historyApiFallback: true,
      open: true,
    }
  };
};