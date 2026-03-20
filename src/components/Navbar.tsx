import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, TerminalSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: '~/home', href: '#hero' },
    { label: '~/about', href: '#about' },
    { label: '~/skills', href: '#skills' },
    { label: '~/projects', href: '#projects' },
    { label: '~/experience', href: '#internship' },
    { label: '~/contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-100/90 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 transition-colors duration-500">
      <div className="flex items-center justify-between px-4 h-12">
        
        {/* IDE Window Controls (Mac style) & Logo */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <motion.a 
            href="#hero"
            className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200"
            whileHover={{ scale: 1.02 }}
          >
            <TerminalSquare size={16} className="text-neon-green" />
            <span>YB_workspace</span>
          </motion.a>
        </div>

        {/* IDE Tabs (Desktop) */}
        <div className="hidden md:flex items-end h-full pt-2 gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-[#121214] hover:text-neon-green rounded-t-lg border border-transparent hover:border-slate-300 dark:hover:border-slate-700 border-b-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-neon-purple uppercase"
          >
            [{language}]
          </button>
          
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-slate-600 dark:text-slate-400 hover:text-neon-cyan transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden text-slate-600 dark:text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-[#0c0c0e] border-b border-slate-300 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-neon-green py-2 border-b border-slate-100 dark:border-slate-800/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
