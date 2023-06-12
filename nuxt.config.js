import { defaultLocale, locales, i18nLocales } from "./constants/i18nLocales";

export default {
  target: "static",
  generate: {
    fallback: true,
    routes() {
      const paths = locales.map((locale) => `/${locale.code}`);
      return paths;
    },
  },
  server: {
    port: 8000,
  },
  loading: { color: "#E25303", height: "4px" },
  css: [],
  plugins: [
    { src: "plugins/owl.js", mode: "client" },
    { src: "plugins/mixitup.js", mode: "client" },
  ],
  image: {
    domains: ["strapi.badblli.dev"],
  },
  buildModules: [],
  modules: ["@nuxtjs/strapi", "@nuxtjs/apollo", "@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    defaultLocale,
    vueI18nLoader: true,
    locales,
    syncLocale: true,
    silentTranslationWarn: true,
    vueI18n: i18nLocales,
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://strapi.badblli.dev/graphql",
        defaultOptions: {
          $query: {
            fetchPolicy: "no-cache",
          },
        },
      },
    },
  },

  build: {
    watch: ["~/constants/*.js"],
    extend(config, ctx) {},
  },
};
