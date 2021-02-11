var configure = require("react-figma-webpack-config");
const Dotenv = require("dotenv-webpack");

module.exports = configure({
  node: {
    fs: "empty",
    child_process: "empty",
    module: "empty",
    net: "empty",
    tls: "empty",
  },
  plugins: [new Dotenv()],
});
