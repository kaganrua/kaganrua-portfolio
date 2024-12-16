import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if key is missing
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export default i18n;