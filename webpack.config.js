const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  //entry: path.resolve(__dirname, "src/index.js"),
  // we can set multiple entry: ([name of entry]: path)
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //filename: "bundle.main.js",
    // filename: "[name].main.js", // name refer to entry's name
    // for caching we can name output like this
    filename: "[name].[contenthash].js",
    clean: true, // prevent keeping extra file - with each build we have a new output with this config old output will delete
  },

  // source map another helpful thing for debugging cause a lot of times you'll gte a message with a line number that doesn't show you where the actual problem is in your source code so source map provide a map for your dist or production code to your coerce code.
  devtool: "source-map",
  // for adding deserve we should first run this command: npm i -D webpack-dev-server
  // and also we need to define a script for run dev server
  // with devServer we don't need to liveSever
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // specify which path should serve
    },
    port: 3000,
    open: true, // open browser automatically
    hot: true, // enable hot reload
    compress: true, // Enable gzip compression for everything served
    historyApiFallback: true, // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses.
    assetModuleFilename: "[name][ext]", // to get asset file in name of file with same extensor not rename to something like 0228al3k5j3k5j23kl3.svg
  },

  // for load images and css, sass, .. files in js file we use loader
  // first we run this command: npm i -D sass style-loader css-loader sass-loader
  module: {
    rules: [
      {
        // we create an object for each type of file
        test: /\.scss$/, // any file ends with .scss
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // to add babel loader for compatible your code with older browsers
      // first we run this command: npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env
      {
        test: /\.js$/,
        exclude: /node_modules/, // because we don't use babel for third party library
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // for load images in js files we use assets loader
      // we don't need to install anything cause webpack comes with this asset resource loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // i : case insensitive
        type: "asset/resource",
      },
    ],
  },
  // plugins are more powerful of loader and they can do a lots of things:
  // for example with htmlTemplePlugin, we can easily create HTML files to serve our bundles and it will all be included with <script> tags in the greeted HTMl.
  // first we run this command: npm i -D html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
    }),
    // to add webpack analyzer first run this command: npm i -D webpack-bundle-analyzer
    new BundleAnalyzerPlugin(),
  ],
};
