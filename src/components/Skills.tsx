
import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl"
  >
    <h3 className="text-lg font-semibold text-purple-700 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm transition-all duration-300 hover:bg-purple-100"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Compétences
      </motion.h2>
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
        {skillsData.skillCategories.map((category, index) => (
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
