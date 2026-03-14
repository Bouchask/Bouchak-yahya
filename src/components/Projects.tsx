import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { useLanguage } from '@/lib/LanguageContext';

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
}: {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition-all"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:gap-3 transition-all"
          >
            <span>{t('projects.learnMore')}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('projects.title')}</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
