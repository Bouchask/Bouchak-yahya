
import { Github } from 'lucide-react';
import projectsData from '../data/projects.json';

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
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-sm transition-all duration-300 hover:bg-purple-100"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-purple-700 hover:text-purple-800 transition-colors"
      >
        <Github size={20} />
        <span>Voir sur GitHub</span>
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
