import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LangContext";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(<accent>.*?<\/accent>|<cyan>.*?<\/cyan>|<amber>.*?<\/amber>)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<accent>")) return <span key={i} className="text-primary">{part.replace(/<\/?accent>/g, "")}</span>;
        if (part.startsWith("<cyan>")) return <span key={i} className="text-terminal-cyan">{part.replace(/<\/?cyan>/g, "")}</span>;
        if (part.startsWith("<amber>")) return <span key={i} className="text-terminal-amber">{part.replace(/<\/?amber>/g, "")}</span>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-1">
            <span className="text-primary">{'// '}</span>{t("about.section")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-8">
            <span className="text-muted-foreground">{'> '}</span>
            <span className="glow-text">{t("about.cmd")}</span> about.md
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="terminal-window"
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-amber" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-3 text-xs text-muted-foreground">README.md</span>
          </div>
          <div className="terminal-body space-y-4 text-sm">
            <p className="text-foreground leading-relaxed"><RichText text={t("about.p1")} /></p>
            <p className="text-foreground leading-relaxed"><RichText text={t("about.p2")} /></p>
            <div className="border-t border-border pt-4 mt-4">
              <p className="text-muted-foreground text-xs">
                <span className="text-primary">STATUS:</span> {t("about.status")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
