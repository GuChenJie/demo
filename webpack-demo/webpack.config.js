const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // entry: "./src/index.js",
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  // devtool: "inline-source-map",
  output: {
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "dd",
    }),
  ],
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
