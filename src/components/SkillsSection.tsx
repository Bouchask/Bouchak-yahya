import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LangContext";
import { skillCategories } from "@/data/portfolio";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-1">
            <span className="text-primary">{'// '}</span>{t("skills.section")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-10">
            <span className="text-muted-foreground">{'> '}</span>
            <span className="glow-text">ls</span> ./tech-stack/
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.prefix}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="terminal-window"
            >
              <div className="terminal-titlebar">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-amber" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-3 text-[10px] text-muted-foreground">{category.prefix}.config</span>
              </div>
              <div className="p-4">
                <h3 className="text-xs text-terminal-cyan uppercase tracking-wider mb-3 font-mono">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: catIndex * 0.08 + si * 0.03 }}
                      className="badge-skill"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
