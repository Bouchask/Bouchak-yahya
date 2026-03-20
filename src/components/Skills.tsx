import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import { FileCode2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="ide-window max-w-5xl mx-auto">
          <div className="ide-header justify-between">
            <div className="flex items-center gap-2">
              <FileCode2 size={14} className="text-neon-purple" />
              <span className="text-[10px] text-slate-500">skills.ts</span>
            </div>
            <div className="text-[10px] text-slate-500">TypeScript React</div>
          </div>
          
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="flex">
              <div className="text-slate-400 dark:text-slate-600 select-none pr-4 text-right border-r border-slate-200 dark:border-slate-800 mr-4">
                {Array.from({ length: 25 }).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-neon-purple">export const</span> <span className="text-neon-cyan">techStack</span> <span className="text-slate-500">=</span> <span className="text-slate-500">&#123;</span>
                  
                  <div className="pl-4">
                    {skillsData.skillCategories.map((category, idx) => (
                      <div key={category.title} className="my-2">
                        <span className="text-slate-800 dark:text-slate-200">"{category.title}"</span><span className="text-slate-500">: [</span>
                        <div className="pl-4 flex flex-wrap gap-2 py-1">
                          {category.skills.map((skill, sIdx) => (
                            <span key={skill}>
                              <span className="text-neon-green">'{skill}'</span>
                              {sIdx < category.skills.length - 1 ? <span className="text-slate-500">, </span> : ''}
                            </span>
                          ))}
                        </div>
                        <span className="text-slate-500">]</span>{idx < skillsData.skillCategories.length - 1 ? <span className="text-slate-500">,</span> : ''}
                      </div>
                    ))}
                  </div>
                  
                  <span className="text-slate-500">&#125;;</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
