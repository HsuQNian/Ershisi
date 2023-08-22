// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/style.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  // plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: "github-light",
    },
  },
});
