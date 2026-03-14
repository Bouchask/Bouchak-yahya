import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const ContactLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="flex items-center gap-6 p-6 glass rounded-2xl group transition-all w-full"
  >
    <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600 transition-all duration-300 flex-shrink-0">
      <Icon size={28} />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {label}
      </p>
    </div>
  </motion.a>
);

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      href: "mailto:mr.bouchakyahya@gmail.com",
      icon: Mail,
      label: t('contact.email'),
    },
    {
      href: "https://www.linkedin.com/in/yahyabouchak",
      icon: Linkedin,
      label: t('contact.linkedin'),
    },
    {
      href: "https://github.com/Bouchask",
      icon: Github,
      label: t('contact.github'),
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('contact.title')}</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <div key={link.label} className="flex">
              <ContactLink {...link} />
            </div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass p-8 rounded-3xl text-center space-y-6"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('contact.workTogether')}</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
          <a
            href="mailto:mr.bouchakyahya@gmail.com"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            <span>{t('contact.sendBtn')}</span>
            <Send size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
