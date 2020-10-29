const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  // new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: "./src/quilty.css",
  }),
];

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
  plugins,
};