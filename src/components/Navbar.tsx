import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#internship' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-5xl glass rounded-2xl transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'bg-white/40 border-transparent'
        }`}>
          <div className="flex justify-between items-center h-14 px-6">
            <motion.a 
              href="#hero"
              className="text-xl font-black text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              YB
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-xl hover:bg-white/50 dark:hover:bg-slate-800/50"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
              
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-slate-600 dark:text-slate-400 rounded-xl"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="p-2 text-slate-600 dark:text-slate-400"
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
              className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-xl transition-all"
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
