import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import { useLanguage } from '@/lib/LanguageContext';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass rounded-2xl p-6 transition-all duration-300"
  >
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 transition-colors"
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
      className="py-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
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
              hidden: { opacity: 0, y: 20 },
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
