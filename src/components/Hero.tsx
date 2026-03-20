import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Typewriter = ({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, 50);
    };
    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayed}</span>;
};

const Hero = () => {
  const { t, language } = useLanguage();
  const cvPath = language === 'en' ? '/cv/cv_ang.pdf' : '/cv/cv_fr.pdf';
  const [showStatus, setShowStatus] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: CLI Interface */}
          <div className="ide-window p-0 h-[450px] flex flex-col w-full max-w-2xl">
            <div className="ide-header justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-slate-500" />
                <span className="text-[10px] text-slate-500">guest@portfolio: ~</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm leading-relaxed flex-1 overflow-y-auto">
              <div className="text-neon-green mb-4">
                $ ./init_portfolio.sh
              </div>
              
              <div className="mb-6">
                <span className="text-neon-cyan">&gt;_ </span>
                <span className="text-slate-800 dark:text-slate-200 text-2xl md:text-4xl font-bold">
                  <Typewriter text="Yahya Bouchak" delay={500} onComplete={() => setShowStatus(true)} />
                </span>
              </div>

              {showStatus && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="space-y-4"
                >
                  <div className="text-slate-600 dark:text-slate-400">
                    <Typewriter text="Deploying Full-Stack AI & Cloud Solutions..." delay={0} />
                    <motion.span 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 2.5 }}
                      className="text-neon-green ml-2"
                    >
                      [OK]
                    </motion.span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 3 }}
                    className="text-slate-500 dark:text-slate-400 pt-4"
                  >
                    {t('hero.description')}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 3.5 }}
                    className="flex gap-4 pt-6"
                  >
                    <a href="#contact" className="px-6 py-2 bg-neon-green/10 text-neon-green border border-neon-green/30 hover:bg-neon-green hover:text-black transition-colors">
                      ./contact.sh
                    </a>
                    <a href={cvPath} download className="px-6 py-2 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan hover:text-black transition-colors">
                      wget cv.pdf
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* RIGHT: Profile Photo in Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="ide-window p-0 w-80 md:w-[400px]">
              <div className="ide-header">
                <span className="text-[10px] text-slate-500">profile_viewer.exe</span>
              </div>
              <div className="relative p-4 bg-slate-50 dark:bg-[#09090b]">
                {/* Techy HUD border */}
                <div className="absolute inset-4 border border-neon-cyan/30 pointer-events-none" />
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neon-cyan pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-neon-cyan pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-neon-cyan pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neon-cyan pointer-events-none" />
                
                <img
                  src="/assets/profile.png"
                  alt="Yahya Bouchak"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute bottom-6 left-6 bg-black/80 px-2 py-1 border border-neon-green/30 text-[10px] text-neon-green flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
                  STATUS: ONLINE
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
