

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"tr":{"welcome":"Selam"},"en":{"welcome":"Welcome"},"de":{"welcome":"deutsch"},"uk":{"welcome":"ukranian"},"ru":{"welcome":"russian"}},
  vueI18nLoader: true,
  locales: [{"code":"tr","iso":"tr-TR","name":"Türkçe"},{"code":"en","iso":"en-US","name":"English"},{"code":"de","iso":"de-DE","name":"Deutsch"},{"code":"uk","iso":"uk-UA","name":"українська"},{"code":"ru","iso":"ru-RU","name":"Русский"}],
  defaultLocale: "tr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  syncLocale: true,
  silentTranslationWarn: true,
  normalizedLocales: [{"code":"tr","iso":"tr-TR","name":"Türkçe"},{"code":"en","iso":"en-US","name":"English"},{"code":"de","iso":"de-DE","name":"Deutsch"},{"code":"uk","iso":"uk-UA","name":"українська"},{"code":"ru","iso":"ru-RU","name":"Русский"}],
  localeCodes: ["tr","en","de","uk","ru"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
