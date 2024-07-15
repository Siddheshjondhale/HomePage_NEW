// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
   plugins: [
    '~/plugins/fontawesome.ts'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/custom-styles.css',
    "swiper/swiper-bundle.css",

  ] ,
  



})