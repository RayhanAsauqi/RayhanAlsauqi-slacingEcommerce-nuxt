// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "pinia/nuxt"],
  // googleFonts: {
  //   families: {
  //     Poppins: [100, 200, 300, 400, 500, 600, 700],
  //   },
  // },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-swiper",
  ],
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700],
    },
  },
  
});
