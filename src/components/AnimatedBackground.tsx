import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * FULL-PAGE TERMINAL MATRIX BACKGROUND
 */

const MatrixStream = ({ delay, left, duration }: { delay: number, left: string, duration: number }) => {
  const codeLines = useMemo(() => [
    "def optimize_weights(model):",
    "  for epoch in range(100):",
    "    loss = model.train()",
    "    if loss < 0.01:",
    "      break",
    "return model",
    "const initApp = async () => {",
    "  await connectDB();",
    "  server.listen(8080);",
    "}",
    "docker run -d -p 80:80 nginx",
    "kubectl apply -f deploy.yml",
    "SELECT * FROM users",
    "WHERE active = true;",
    "model.fit(x_train, y_train)"
  ], []);

  // Shuffle code lines for this stream
  const streamText = useMemo(() => {
    const shuffled = [...codeLines].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }, [codeLines]);

  return (
    <motion.div
      className="absolute top-[-50%] text-slate-400/10 dark:text-green-500/10 font-mono text-[10px] md:text-xs whitespace-pre"
      style={{ left, willChange: 'transform' }}
      animate={{ y: ['0vh', '150vh'] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
        delay: delay
      }}
    >
      <div className="flex flex-col gap-6">
        {streamText.map((line, i) => (
          <span key={i} className="opacity-70">{line}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ServerLogs = ({ top, left, delay }: { top: string, left: string, delay: number }) => {
  const logs = [
    "[INFO] Initializing clusters...",
    "[WARN] High memory usage node-3",
    "[OK]   Model converged at 99.2%",
    "[INFO] Starting data pipeline",
    "[OK]   Sync complete."
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear", delay }}
      style={{ top, left, willChange: 'transform' }}
      className="absolute font-mono text-[9px] text-slate-500/20 dark:text-cyan-500/15 pointer-events-none select-none"
    >
      {logs.map((l, i) => <div key={i} className="mb-1">{l}</div>)}
    </motion.div>
  );
};

const AnimatedBackground: React.FC = () => {
  // Generate random stable nodes for subtle mesh
  const nodes = useMemo(() => Array.from({ length: 25 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  })), []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#f8fafc] dark:bg-[#09090b] transition-colors duration-500 overflow-hidden pointer-events-none">
      
      {/* Subtle Mesh */}
      <svg className="absolute inset-0 w-full h-full stroke-slate-300 dark:stroke-green-500/5 stroke-[0.5] transition-colors duration-500">
        {nodes.map((n1, i) => (
          nodes.slice(i + 1, i + 3).map((n2, j) => (
            <line key={`${i}-${j}`} x1={`${n1.x}%`} y1={`${n1.y}%`} x2={`${n2.x}%`} y2={`${n2.y}%`} />
          ))
        ))}
      </svg>

      {/* Matrix Streams */}
      {Array.from({ length: 12 }).map((_, i) => (
        <MatrixStream 
          key={i} 
          left={`${(i + 1) * 8}%`} 
          delay={Math.random() * -30} 
          duration={20 + Math.random() * 20} 
        />
      ))}

      {/* Server Logs */}
      <ServerLogs top="20%" left="15%" delay={0} />
      <ServerLogs top="60%" left="75%" delay={5} />
      <ServerLogs top="80%" left="30%" delay={2} />

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-slate-200/30 dark:bg-green-900/5 rounded-full blur-[150px] animate-pulse-slow will-change-transform transition-colors" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 20s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default AnimatedBackground;
