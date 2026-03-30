import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.journey"), href: "#journey" },
    { label: t("nav.connect"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono font-bold text-sm">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="glow-text">YB</span>
          <span className="text-muted-foreground text-xs hidden sm:inline">~/portfolio</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-terminal-dim">/</span>{item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-border mx-1" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors px-2 py-1 border border-border rounded hover:border-primary/40"
            title="Toggle theme"
          >
            {theme === "dark" ? "[ ☾ dark ]" : "[ ☼ light ]"}
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors px-2 py-1 border border-border rounded hover:border-primary/40"
            title="Toggle language"
          >
            <span className="text-terminal-amber">LANG</span>=<span className="text-primary">{lang.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-[10px] font-mono text-muted-foreground px-1.5 py-1 border border-border rounded"
          >
            {theme === "dark" ? "☾" : "☼"}
          </button>
          <button
            onClick={toggleLang}
            className="text-[10px] font-mono text-muted-foreground px-1.5 py-1 border border-border rounded"
          >
            {lang.toUpperCase()}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border border-border mt-2 mx-4 rounded p-3 space-y-2"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-xs font-mono text-muted-foreground hover:text-primary transition-colors py-1"
            >
              <span className="text-primary">$</span> cd {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
