import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang, t } = useLang();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="terminal-window group"
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-amber" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-3 text-[10px] text-muted-foreground">{project.id}.py</span>
              </div>
              <div className="p-5 flex flex-col min-h-[200px]">
                <h3 className="font-bold text-sm font-mono text-primary mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge-skill text-[10px]">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-3.5 h-3.5" /> source
                  </a>
                  {project.linkedinUrl && (
                    <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> demo
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
