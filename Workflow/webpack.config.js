module.exports = {
  entry: "./app.ts",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" }]
  }
};
