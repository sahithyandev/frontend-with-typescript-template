const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  target: "web",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /.ts/, exclude: /node_modules/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "./" }],
    }),
  ],
};
