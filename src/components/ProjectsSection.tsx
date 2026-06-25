import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Globe, Linkedin } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang, t } = useLang();

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "LIVE": return "bg-terminal-green text-background";
      case "AI/ML": return "bg-terminal-cyan text-background";
      case "MOBILE": return "bg-terminal-purple text-background";
      case "CV": return "bg-terminal-amber text-background";
      default: return "bg-primary text-background";
    }
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-1">
            <span className="text-primary">{'// '}</span>{t("projects.section")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-10">
            <span className="text-muted-foreground">{'> '}</span>
            <span className="glow-text">find</span> ./projects/ -type f
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="terminal-window group"
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-amber" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-3 text-[10px] text-muted-foreground">{project.id}</span>
                {project.badge && (
                  <span className={`ml-auto text-[8px] px-1.5 py-0.5 rounded font-bold ${getBadgeColor(project.badge)}`}>
                    {project.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col min-h-[220px]">
                <h3 className="font-bold text-sm font-mono text-primary mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge-skill text-[10px]">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" /> source
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-terminal-cyan transition-colors">
                      <Globe className="w-3.5 h-3.5" /> live
                    </a>
                  )}
                  {project.linkedinUrl && (
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-terminal-amber transition-colors">
                      <Linkedin className="w-3.5 h-3.5" /> post
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
