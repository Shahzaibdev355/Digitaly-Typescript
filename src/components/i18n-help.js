import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "this is shahzaib welcome hello how are you": "This is Shahzaib, welcome! Hello, how are you?"
    }
  },
  fr: {
    translation: {
      "this is shahzaib welcome hello how are you": "C'est Shahzaib, bienvenue! Bonjour, comment ça va?"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false // react already escapes by default
  }
});

export default i18n;
