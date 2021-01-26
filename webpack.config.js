const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "bundle1.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  plugins: [new TerserPlugin()],
};
