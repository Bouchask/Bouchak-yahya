import { motion } from 'framer-motion';
import { GraduationCap, Code, Award } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          <div className="bg-[#020617] rounded-full px-6 py-1">
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{t('nav.about')}</span>
          </div>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">{t('about.title')}</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-premium p-10 md:p-12 rounded-[2.5rem] relative group overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700" />
          
          <div className="space-y-8 relative">
            <h3 className="text-3xl font-bold text-white flex items-center gap-4">
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <Code className="text-purple-400" size={28} />
              </div>
              {t('about.journey')}
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {t('about.p1')}
            </p>
            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {t('about.p2')}
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-8 rounded-[2.5rem] border-l-purple-500/50"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              {t('about.education')}
            </h3>
            <div className="space-y-8">
              {[
                { title: t('about.master'), subtitle: t('about.inProgress') },
                { title: t('about.bachelor'), subtitle: t('about.gradLastYear') },
                { title: t('about.bts'), subtitle: t('about.gradHonors') }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10 group">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-800 border border-white/20 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors"></div>
                  <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.title}</h4>
                  <p className="text-sm text-purple-400 font-medium tracking-wide">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-premium p-8 rounded-[2.5rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
              <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <Award className="text-yellow-400" size={24} />
              </div>
              {t('about.softSkills')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Teamwork', 'Problem Solving', 'Autonomy', 'Communication', 'Adaptability'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 text-slate-300 rounded-2xl text-sm font-medium border border-white/10 hover:border-purple-500/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
