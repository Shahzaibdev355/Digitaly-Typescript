import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

// Create a Context for Language
const LanguageContext = createContext();

// LanguageProvider Component
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  
  // Retrieve language from localStorage, or default to 'fr'
  const storedLanguage = localStorage.getItem("language") || "fr";
  const [selectedLang, setSelectedLang] = useState(storedLanguage);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setSelectedLang(languageCode);
    localStorage.setItem("language", languageCode);
  };

  return (
    <LanguageContext.Provider value={{ selectedLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
