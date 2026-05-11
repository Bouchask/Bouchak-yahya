import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  { text: "CORE_BOOT_LOADER v4.0.1-stable", type: "info", delay: 100 },
  { text: "CHECKING HARDWARE INTEGRITY...", type: "info", delay: 400 },
  { text: "[ OK ] CPU: 16-CORE HYPERTHREADED", type: "success", delay: 150 },
  { text: "[ OK ] RAM: 32GB ECC-LEVEL PARITY", type: "success", delay: 100 },
  { text: "[ OK ] GPU: NEURAL_ENGINE_ACCELERATOR", type: "success", delay: 200 },
  { text: "LOADING VIRTUAL KERNEL...", type: "info", delay: 500 },
  { text: "MOUNTING /DEV/PORTFOLIO...", type: "info", delay: 300 },
  { text: "INITIATING NEURAL NETWORK INTERFACE...", type: "info", delay: 400 },
  { text: "ESTABLISHING SECURE PROTOCOLS...", type: "info", delay: 250 },
  { text: "COMPILING SOURCE FILES...", type: "info", delay: 600 },
  { text: "[ OK ] LOADED: HeroSection.bin", type: "success", delay: 80 },
  { text: "[ OK ] LOADED: AboutSection.bin", type: "success", delay: 80 },
  { text: "[ OK ] LOADED: SkillsMatrix.bin", type: "success", delay: 80 },
  { text: "[ OK ] LOADED: ProjectsRegistry.bin", type: "success", delay: 80 },
  { text: "STARTING LOCAL SHELL...", type: "info", delay: 400 },
  { text: "USER AUTHENTICATED: GUEST_ACCESS", type: "info", delay: 300 },
  { text: "SYSTEM READY.", type: "success", delay: 500 },
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<{ text: string; type: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, BOOT_LOGS[currentIndex].delay);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 font-mono"
    >
      <div className="max-w-2xl w-full h-[400px] overflow-hidden flex flex-col">
        <div className="space-y-1">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-sm ${
                log.type === "success" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {log.text}
            </motion.div>
          ))}
          {currentIndex < BOOT_LOGS.length && (
            <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-primary"
          />
        </div>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
          Loading System Core
        </span>
      </motion.div>
    </motion.div>
  );
}
