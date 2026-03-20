import { motion } from 'framer-motion';
import { Github, ExternalLink, TerminalSquare } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex items-center gap-2 mb-12">
          <TerminalSquare className="text-neon-cyan" />
          <h2 className="text-2xl font-mono text-slate-800 dark:text-slate-200">~/projects/featured</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="ide-window flex flex-col group hover:glow-cyan transition-shadow duration-300"
            >
              <div className="ide-header justify-between">
                <span className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-neon-green' : 'bg-neon-purple'} animate-pulse`} />
                  {project.id}.service
                </span>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-neon-green">
                      <Github size={14} />
                    </a>
                  )}
                  {project.linkedinUrl && (
                    <a href={project.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-neon-cyan">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 dark:bg-[#09090b] flex-1 font-mono text-sm">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-xs leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-slate-500 text-xs uppercase tracking-widest">Dependencies:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 text-[10px] border border-slate-300 dark:border-slate-800 rounded bg-white dark:bg-[#121214] text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                   <span className="text-slate-500 text-xs uppercase tracking-widest">Logs:</span>
                   <ul className="mt-2 space-y-1">
                     {project.features.map((feature, i) => (
                       <li key={i} className="text-[10px] text-slate-500 flex gap-2">
                         <span className="text-neon-cyan">&gt;</span> {feature}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
