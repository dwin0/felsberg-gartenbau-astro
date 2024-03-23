const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ["./src/styles/media-queries.css"],
    }),
    postcssPresetEnv({
      features: {},
    }),
  ],
};
