const { defineConfig } = require("@vue/cli-service");

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },
  transpileDependencies: true,
  // 关闭eslint语法验证
  lintOnSave: false,
  devServer: {},
  css: {
    extract: false,
    sourceMap: true, // 开启 CSS source maps?
    loaderOptions:{
      less:{
        javascriptEnabled: true
      }
    }
  }
});
