import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ua",
    resources: {
      gb: {
        translation: {
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
        },
      },
      ua: {
        translation: {
          description: {
            part1: "Редагуйте <1>src/App.js</1> і збережіть для перезагрузки.",
            part2: "Вчити реакт",
          },
        },
      },
    },
  });
