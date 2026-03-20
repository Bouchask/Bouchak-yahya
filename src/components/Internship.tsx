import { motion } from 'framer-motion';
import { GitCommit, GitBranch } from 'lucide-react';
import internshipData from '../data/internship.json';

const Internship = () => {
  return (
    <section id="internship" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="flex items-center gap-2 mb-12">
          <GitBranch className="text-neon-purple" />
          <h2 className="text-2xl font-mono text-slate-800 dark:text-slate-200">git log --oneline --experience</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Main Git Branch Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800 transform md:-translate-x-1/2" />

          {/* Experience Node */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Commit Node */}
            <div className="absolute left-[-40px] md:left-1/2 top-6 w-4 h-4 bg-neon-purple rounded-full border-4 border-white dark:border-[#09090b] transform md:-translate-x-1/2 glow-purple z-10" />

            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="ide-window p-6 text-left inline-block w-full">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <GitCommit size={14} className="text-neon-cyan" />
                  <span>commit 8f3a9b2</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 font-mono">
                  {internshipData.role}
                </h3>
                <h4 className="text-neon-purple font-mono text-sm mb-4">@ {internshipData.company}</h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-mono mb-4">
                  {internshipData.description}
                </p>

                <div className="space-y-2 mb-4">
                  {internshipData.learnings.map((learning, i) => (
                    <div key={i} className="flex gap-2 text-[10px] font-mono text-slate-500">
                      <span className="text-neon-green">+</span> {learning}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {internshipData.technologies.map(tech => (
                    <span key={tech} className="text-[10px] text-slate-400 font-mono">
                      #{tech.toLowerCase().replace(' ', '_')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Node (Mocked as another commit for completeness of the timeline) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-[-40px] md:left-1/2 top-6 w-4 h-4 bg-neon-cyan rounded-full border-4 border-white dark:border-[#09090b] transform md:-translate-x-1/2 glow-cyan z-10" />

            <div className="md:w-1/2 md:ml-auto md:pl-12">
              <div className="ide-window p-6 text-left inline-block w-full">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <GitCommit size={14} className="text-neon-green" />
                  <span>commit 4a1c7e9</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 font-mono">
                  Master's in Information Systems & AI
                </h3>
                <h4 className="text-neon-cyan font-mono text-sm mb-4">@ FPK, Morocco</h4>
                
                <div className="flex gap-2 text-[10px] font-mono text-slate-500">
                  <span className="text-neon-green">+</span> Specializing in AI, Computer Vision, and Big Data
                </div>
                <div className="flex gap-2 text-[10px] font-mono text-slate-500">
                  <span className="text-neon-green">+</span> Building end-to-end intelligent systems
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Internship;
