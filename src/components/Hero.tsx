import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();

  const cvPath = language === 'en' ? '/src/data/cv_ang.pdf' : '/src/data/cv_fr.pdf';

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-800"
            >
              {t('hero.welcome')}
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Yahya <span className="text-gradient">Bouchak</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('hero.subtitle')}
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('hero.contactBtn')}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={cvPath}
              download
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 rounded-full font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={20} />
              <span>{t('hero.downloadCV')}</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <motion.div
              className="relative rounded-3xl overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl w-72 md:w-96"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/lovable-uploads/66d6a5fd-86ee-4345-a5d1-bf0dd9130a15.png"
                alt="Yahya Bouchak"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full -z-10 blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -z-10 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
