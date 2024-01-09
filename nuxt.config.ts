// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui','nuxt-api-party'],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  apiParty: {
    endpoints: {
      wfstatus: {
        url: "https://api.warframestat.us",
        // Global headers sent with each request
      }
    }
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
