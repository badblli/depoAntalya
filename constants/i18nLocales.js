import en from "../static/assets/lang/en";
import tr from "../static/assets/lang/tr";
import de from "../static/assets/lang/de";
import uk from "../static/assets/lang/uk";
import ru from "../static/assets/lang/ru";

// Default language
const defaultLocale = "tr";

// List of available languages
const locales = [
  {
    code: "tr",
    iso: "tr-TR",
    name: "Türkçe",
  },
  {
    code: "en",
    iso: "en-US",
    name: "English",
  },
  {
    code: "de",
    iso: "de-DE",
    name: "Deutsch",
  },
  {
    code: "uk",
    iso: "uk-UA",
    name: "українська",
  },
  {
    code: "ru",
    iso: "ru-RU",
    name: "Русский",
  },
];

// Messages for each language
const i18nLocales = {
  tr,
  en,
  de,
  uk,
  ru,
};

export { defaultLocale, locales, i18nLocales };
