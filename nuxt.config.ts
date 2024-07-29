// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/styles/global.scss';",
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap",
        },
      ],
    },
  },
});
