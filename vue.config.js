const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const cpns = resolve(__dirname, 'src/components')
const views = resolve(__dirname, 'src/views')

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检查
  lintOnSave: false,
  // 自动的打开浏览器，端口指定(port)，域名指定(host)
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    },
    resolve: {
      alias: {
        cpns,
        views
      }
    }
  }
})
