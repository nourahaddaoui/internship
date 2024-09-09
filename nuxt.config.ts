// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@ant-design-vue/nuxt', '@nuxtjs/i18n', "@pinia/nuxt"],

  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    dynamicRouteParams: true,
    strategy: "prefix",
    baseUrl: "en",
    vueI18n: './locales/i18n.config.ts'
  },


  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from
      'pinia'
    ],
  },

})