import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { useLang } from "@/contexts/LangContext";
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile image — terminal window style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="terminal-window w-32 h-auto md:w-40">
            <div className="terminal-titlebar !py-1.5 !px-2.5 !gap-[5px]">
              <div className="terminal-dot !w-2 !h-2 terminal-dot-red" />
              <div className="terminal-dot !w-2 !h-2 terminal-dot-amber" />
              <div className="terminal-dot !w-2 !h-2 terminal-dot-green" />
              <span className="ml-1.5 text-[8px] text-muted-foreground">profile.png</span>
            </div>
            <div className="profile-terminal">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm mb-4 tracking-wider">
            <span className="text-terminal-amber">~</span> {t("hero.path")} <span className="text-muted-foreground">$</span> <span className="text-primary">{t("hero.cmd")}</span>
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight font-mono"
        >
          <span className="glow-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl text-terminal-cyan mb-8 h-10 font-mono"
        >
          <span className="text-muted-foreground">{'> '}</span>
          <Typewriter
            key={t("hero.role1")}
            options={{
              strings: [t("hero.role1"), t("hero.role2"), t("hero.role3"), t("hero.role4"), t("hero.role5")],
              autoStart: true,
              loop: true,
              deleteSpeed: 25,
              delay: 45,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="terminal-window max-w-xl mx-auto text-left mb-10"
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-amber" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-3 text-xs text-muted-foreground">about.sh</span>
          </div>
          <div className="terminal-body text-xs md:text-sm">
            <p className="text-muted-foreground">{t("hero.comment1")}</p>
            <p className="text-muted-foreground">{t("hero.comment2")}</p>
            <p className="mt-2">
              <span className="text-terminal-amber">const</span>{" "}
              <span className="text-foreground">engineer</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-muted-foreground">{'{'}</span>
            </p>
            <p className="pl-4">
              <span className="text-terminal-cyan">focus</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-primary">{t("hero.focus")}</span>
              <span className="text-muted-foreground">,</span>
            </p>
            <p className="pl-4">
              <span className="text-terminal-cyan">stack</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-primary">{t("hero.stack")}</span>
              <span className="text-muted-foreground">,</span>
            </p>
            <p className="pl-4">
              <span className="text-terminal-cyan">status</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-primary">{t("hero.status")}</span>
            </p>
            <p>
              <span className="text-muted-foreground">{'}'}</span>
              <span className="text-muted-foreground">;</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-muted-foreground"
        >
          <span className="text-primary">↓</span> {t("hero.scroll")} <span className="text-primary">↓</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
