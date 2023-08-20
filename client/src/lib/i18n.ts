import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// cheatsheet for Ukrainian plural forms:
// counter_one: "Мову змінено {{count}} раз",
// counter_few: "Мову змінено {{count}} рази (few)",
// counter_many: "Мову змінено {{count}} разів (many)",
// counter_other: "Мову змінено {{count}} разів (other)",

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uk",
    interpolation: {
      escapeValue: false,
    },
  });
