// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  i18n: {
    baseUrl: 'https://gansekow-coaching.de',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    strategy: 'prefix_except_default',
    locales: [
      {
        name: 'Deutsch',
        code: 'de',
        iso: 'de-De',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    customRoutes: 'config',
    pages: {
      'why-coaching': {
        en: '/why-coaching',
        de: '/warum-coaching',
      },
      about: {
        en: '/about',
        de: '/über-mich',
      },
      contact: {
        en: '/contact',
        de: '/kontakt',
      },
      index: {
        en: '/',
        de: '/',
      },
      imprint: {
        en: '/imprint',
        de: '/impressum',
      },
      privacy: {
        en: '/privacy',
        de: '/datenschutz',
      },
    },
  },
});
