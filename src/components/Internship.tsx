import internshipData from '../data/internship.json';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
              <Briefcase size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{internshipData.company}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">{internshipData.role} • {internshipData.duration}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {internshipData.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Mission Description</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {internshipData.description}
            </p>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Key Points</h4>
            <ul className="space-y-3">
              {internshipData.learnings.map((learning, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                >
                  <CheckCircle2 size={20} className="text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                  <span className="text-sm font-medium">{learning}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Internship;
