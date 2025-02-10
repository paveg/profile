import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import jaTranslation from './locales/ja/translation.json';

const getInitialLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'ja';
  } catch {
    return 'ja';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: jaTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
