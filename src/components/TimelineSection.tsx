import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { timeline } from "@/data/portfolio";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang, t } = useLang();

  return (
    <section id="journey" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-1">
            <span className="text-primary">{'// '}</span>{t("timeline.section")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-10">
            <span className="text-muted-foreground">{'> '}</span>
            <span className="glow-text">git log</span> --oneline
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex gap-4 relative"
              >
                <div className="w-[31px] flex justify-center shrink-0 z-10">
                  <div className={`w-2.5 h-2.5 rounded-full mt-2 ${
                    item.type === "experience"
                      ? "bg-terminal-amber shadow-[0_0_8px_hsl(38,92%,50%,0.5)]"
                      : "bg-primary shadow-[0_0_8px_hsl(142,72%,50%,0.5)]"
                  }`} />
                </div>
                <div className="glass-card p-4 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {item.type === "education" ? (
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-terminal-amber" />
                    )}
                    <span className="text-[10px] font-mono text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold font-mono">{item.title[lang]}</h3>
                  {item.subtitle[lang] && <p className="text-xs text-terminal-cyan">{item.subtitle[lang]}</p>}
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.description[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
