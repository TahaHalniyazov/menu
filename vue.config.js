const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/menu/'  // Замените 'your-repo' на имя вашего репозитория GitHub
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/style/variables.sass"`
      }     
    }
  }
});
