import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import { useLanguage } from '@/lib/LanguageContext';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="glass-premium rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden"
  >
    {/* Background glow */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-all duration-700" />
    
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: 'rgba(139, 92, 246, 0.15)',
            borderColor: 'rgba(139, 92, 246, 0.5)'
          }}
          className="px-4 py-2 bg-white/5 text-slate-300 rounded-2xl text-sm font-medium border border-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="skills"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        >
          <div className="bg-[#020617] rounded-full px-6 py-1">
            <span className="text-sm font-bold text-purple-400 uppercase tracking-widest">{t('nav.skills')}</span>
          </div>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillsData.skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <SkillCategory
              title={category.title}
              skills={category.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
