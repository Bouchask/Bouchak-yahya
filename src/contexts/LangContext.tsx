import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { translations } from "@/data/portfolio";

type Lang = "en" | "fr";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key: string) => key,
});

// Track analytics events
const trackLanguageChange = (language: Lang) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "language_change", { language });
  }
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("yb-lang") as Lang) || "en";
    }
    return "en";
  });

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "en" ? "fr" : "en";
      localStorage.setItem("yb-lang", next);
      trackLanguageChange(next);
      return next;
    });
  }, []);

  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
