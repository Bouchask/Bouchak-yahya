import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveTerminal from "./InteractiveTerminal";
import { useLang } from "@/contexts/LangContext";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-1">
            <span className="text-primary">{'// '}</span>{t("contact.section")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
            <span className="text-muted-foreground">{'> '}</span>
            <span className="glow-text">./connect</span> --interactive
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-lg">
            {t("contact.desc")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
}
