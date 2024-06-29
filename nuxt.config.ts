export default defineNuxtConfig({
  build: {
    transpile: ['wide-align']
  },
  modules: [
    '@pinia/nuxt',
    'vuetify-nuxt-module',
    '@nuxtjs/i18n',
    'nuxt-swiper'
  ],
  devtools: { enabled: true },
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi', 
      }
    }
  },
  i18n: {
    strategy: 'no_prefix',
    lazy:true,
    langDir: 'locales',
    defaultLocale: 'en',
    locales:[
      {
        code: 'ar',
        name: 'Arabic',
        file: 'ar.json',
        iso: 'ar-SA',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        iso: 'en-US',
      },
    ]
  },
})
