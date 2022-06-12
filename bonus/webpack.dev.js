const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
  },
  devtool: "eval-source-map",
  plugins: [
    new DotEnv({
      path: "./.dev.env",
    }),
  ],
});
