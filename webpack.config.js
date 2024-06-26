const path = require("path");

module.exports = {
  mode: "development", // or 'development'
  entry: ["./src/main.js"], // Array of entry points
  output: {
    filename: "index.js", // Output file
    path: path.resolve(__dirname, "dist"),
    library: "MyLibrary",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve these extensions
  },
};
