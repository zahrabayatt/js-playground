const path = require("path");

module.exports = {
  mode: "production", // or 'development'
  entry: ["./src/hello.js", "./src/hi.ts"], // Array of entry points
  output: {
    filename: "index.js", // Output file
    path: path.resolve(__dirname, "dist"),
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
