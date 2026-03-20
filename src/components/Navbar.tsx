import { useState, useEffect } from 'react';
import { Menu, X, Languages, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#internship' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-5xl glass rounded-full transition-all duration-500 ${
          scrolled ? 'border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-slate-950/80 scale-95' : 'bg-transparent border-transparent'
        }`}>
          <div className="flex justify-between items-center h-14 px-8">
            <motion.a 
              href="#hero"
              className="flex items-center gap-2 text-2xl font-black"
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={24} className="text-cyan-400 fill-cyan-400/20" />
              <span className="text-white tracking-tighter">YB</span>
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all rounded-full hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-6 w-px bg-white/10 mx-4" />
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-full transition-all text-xs font-bold border border-white/5"
              >
                <Languages size={16} />
                <span className="uppercase">{language}</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleLanguage}
                className="p-2 text-slate-400 rounded-xl font-bold text-xs uppercase"
              >
                {language}
              </button>
              <button
                className="p-2 text-slate-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 glass rounded-3xl overflow-hidden border-purple-500/20"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-6 py-4 text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
