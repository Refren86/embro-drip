import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

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
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const translationData = {
  emailError: '',
  passwordError: '',
};

function updateTranslations() {
  translationData.emailError = i18n.t('login.emailError');
  translationData.passwordError = i18n.t('login.passwordError');
}

if (i18n.isInitialized) {
  updateTranslations();
}

// reset translations to new values on language change
i18n.on('languageChanged', function () {
  updateTranslations();
});

i18n.on('loaded', function () {
  updateTranslations();
});
