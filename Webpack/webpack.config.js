const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack",
      template: path.resolve(__dirname, "./src/template.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
