import { useState } from 'react';
import { Github, ExternalLink, X, CheckCircle2, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import { useLanguage } from '@/lib/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  linkedinUrl?: string;
  features: string[];
}

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-gradient transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                title="LinkedIn Post"
              >
                <Linkedin size={18} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
              title="GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-slate-400 font-medium px-1">+{project.technologies.length - 3} more</span>
            )}
          </div>
          
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:gap-3 transition-all"
          >
            <span>{t('projects.learnMore')}</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { t, language } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div
        layoutId={project.id}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden shadow-2xl z-10"
      >
        <div className="p-6 sm:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <X size={24} />
          </button>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 pr-12">
                {project.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
                {t('experience.keyPoints')}
              </h4>
              <ul className="grid gap-3">
                {project.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25"
              >
                <Github size={20} />
                <span>GitHub Repository</span>
              </a>
              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Post</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('projects.title')}</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} onOpen={setSelectedProject} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
