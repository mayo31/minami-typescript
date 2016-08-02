module.exports = {
  entry: "./src/Index.tsx",
  output: {
    filename: "./public/js/bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};