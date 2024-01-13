const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: 'https://github.com/jkb0305/functions.gibhub.io.git',
  css: {
    loaderOptions: {
      scss: {
        additionalData:`@import "@/assets/_variabled.scss";`,
      },
    },
  },
})

