import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";  // English translations
import fr from "../locales/fr.json";  // French translations
import de from "../locales/de.json";
import es from "../locales/es.json";
import hi from "../locales/hi.json";
import zh from "../locales/zh.json";


i18n
  .use(LanguageDetector)  // Detect language based on user/browser settings
  .use(initReactI18next)  // Connect i18next to React
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      de: { translation: de },
      es: { translation: es },
      hi: { translation: hi },
      zh: { translation: zh },
    },
    fallbackLng: "fr",  // Default language to fall back on (French in this case)
    interpolation: {
      escapeValue: false,  // React already escapes text
    },
  });

  console.log(i18n.languages); // Check which languages are loaded
console.log(i18n.language); // Check the current language

export default i18n;


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "../locales/en.json";  // English translations
// import fr from "../locales/fr.json";  // French translations

// i18n
//   .use(initReactI18next)  // Connect i18next to React
//   .init({
//     resources: {
//       fr: { translation: fr },
//       en: { translation: en },
//     },
//     lng: "fr",  // Set the default language to French
//     fallbackLng: "fr",  // Default language to fall back on (English in this case)
//     interpolation: {
//       escapeValue: false,  // React already escapes text
//     },
//   });

// console.log(i18n.languages); // Check which languages are loaded
// console.log(i18n.language); // Check the current language

// export default i18n;

