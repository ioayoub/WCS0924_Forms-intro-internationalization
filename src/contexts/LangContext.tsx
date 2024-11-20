// Création

import { createContext, ReactNode, useContext, useState } from "react";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

const translations = { en, fr };

type LanguageType = {
  language: string;
  toggleLanguage: () => void;
  translations: any;
};

const LangContext = createContext<LanguageType>({
  language: "fr",
  toggleLanguage: () => undefined,
  translations: translations["fr"],
});

// Fournir le context

export function LangProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<string>("fr");

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const value = {
    language,
    toggleLanguage,
    translations: translations[language],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// Facilite l'utilisation (hook custom)

export const useTranslation = (): LanguageType => {
  return useContext(LangContext);
};
