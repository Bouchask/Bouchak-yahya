import { motion } from 'framer-motion';
import { GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass p-8 md:p-10 rounded-3xl"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Code className="text-purple-600" />
              My Journey
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I am Yahya Bouchak, a computer science student at FP Khouribga, pursuing a Master's Excellence degree in Intelligent Systems and Artificial Intelligence (SIIA). My academic background reflects my commitment to excellence.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Passionate about solving complex problems and creating innovative solutions, I combine my technical skills in Full-stack development with my deep knowledge of AI to build high-impact projects.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-purple-600" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">Master Excellence in SIIA - FP Khouribga</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">In Progress</p>
              </div>
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">Bachelor's Excellence in SIIA - FP Khouribga</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Graduated Last Year</p>
              </div>
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">BTS in DSI</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Graduated with "Very Good" Honors</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Award className="text-purple-600" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Teamwork', 'Problem Solving', 'Autonomy', 'Communication', 'Adaptability'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-100 dark:border-purple-800">
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
