const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",

  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: isDevelopment ? "eval-source-map" : "source-map",

  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
    port: 30001,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
