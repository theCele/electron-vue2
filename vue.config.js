const path = require("path");

module.exports = {
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify",
    'vuex-module-decorators'
  ],
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/renderer/main.ts")
      .end();
    config.resolve.alias
      .set("@", path.join(__dirname, "./src/renderer"))
  }
}