const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint语法验证
  lintOnSave: false,
  devServer: {},
});
