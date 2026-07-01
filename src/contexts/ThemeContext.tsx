import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "dark", toggleTheme: () => {} });

// Track analytics events
const trackThemeChange = (theme: Theme) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "theme_change", { theme });
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("yb-theme") as Theme) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("yb-theme", theme);
    
    // Track theme change
    trackThemeChange(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const newTheme = t === "dark" ? "light" : "dark";
      trackThemeChange(newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
