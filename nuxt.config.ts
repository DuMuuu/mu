// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr的开启与关闭   默认开启
  ssr: true,
  // 开启调试工具
  devtools: { enabled: true },
  // 应用模块
  modules:['@vant/nuxt'],
});
