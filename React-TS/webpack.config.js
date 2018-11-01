module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" }]
  }
};
