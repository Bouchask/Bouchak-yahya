import { createContext, useContext, useState, ReactNode } from "react";
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

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("yb-lang") as Lang) || "en";
    }
    return "en";
  });

  const toggleLang = () => {
    setLang((l) => {
      const next = l === "en" ? "fr" : "en";
      localStorage.setItem("yb-lang", next);
      return next;
    });
  };

  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
