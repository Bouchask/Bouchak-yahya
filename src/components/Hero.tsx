import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, FileText, Database, Server, Terminal as TermIcon, BrainCircuit } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * CYBER-TECH HERO
 * 4 Core Widgets with 3D Parallax and strict performance optimizations.
 */

// --- WIDGET 1: AI Brain ---
const AIWidget = () => (
  <div className="w-48 bg-slate-900/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col items-center justify-center gap-3">
    <div className="relative">
      <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse-fast" />
      <BrainCircuit size={40} className="text-purple-400 relative z-10 animate-float-subtle" />
    </div>
    <div className="text-center">
      <div className="text-[10px] text-slate-400 uppercase tracking-widest">Neural Core</div>
      <div className="text-xs font-mono text-purple-300 font-bold">Active // 99.8%</div>
    </div>
  </div>
);

// --- WIDGET 2: Cloud / Data ---
const CloudWidget = () => (
  <div className="w-56 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 shadow-[0_0_30px_rgba(34,211,238,0.15)] overflow-hidden relative">
    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
      <Database size={14} className="text-cyan-400" />
      <span className="text-[10px] text-slate-400 uppercase tracking-widest">Cloud Sync</span>
    </div>
    <div className="space-y-2 relative">
      {/* Scanning Light */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent -translate-y-full animate-scan z-10 pointer-events-none" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 bg-slate-950/50 rounded border border-white/5 p-2">
          <Server size={14} className="text-slate-500" />
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full bg-cyan-400 rounded-full`} style={{ width: `${Math.random() * 40 + 60}%` }} />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-fast" style={{ animationDelay: `${i * 0.2}s` }} />
        </div>
      ))}
    </div>
  </div>
);

// --- WIDGET 3: Dev IDE ---
const DevIDE = () => {
  const codeLines = [
    "import tensorflow as tf",
    "from transformers import pipeline",
    "",
    "def init_ai_core():",
    "  model = tf.keras.models.load('v3')",
    "  return model.compile()",
    "",
    "# System Ready _"
  ];

  return (
    <div className="w-72 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[10px] text-slate-500">core_engine.py</span>
      </div>
      <div className="p-4 text-[11px] leading-relaxed">
        {codeLines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-slate-600 select-none">{i + 1}</span>
            <span className={line.includes('import') || line.includes('def') || line.includes('return') ? 'text-purple-400' : line.includes('#') ? 'text-slate-500' : 'text-slate-300'}>
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- WIDGET 4: Terminal ---
const TerminalWidget = () => {
  const [lines, setLines] = useState<string[]>(['$ init_deploy --prod']);
  
  useEffect(() => {
    const sequence = [
      '> Authenticating with AWS... [OK]',
      '> Provisioning EC2 clusters...',
      '> Pulling docker image: v3.0.4',
      '> Starting containers... [OK]',
      '> Health check passed.',
      '> System fully operational.'
    ];
    let step = 0;
    const interval = setInterval(() => {
      if (step < sequence.length) {
        setLines(prev => [...prev, sequence[step]]);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLines(['$ init_deploy --prod']), 5000); // loop
      }
    }, 800);
    return () => clearInterval(interval);
  }, [lines.length === 1]);

  return (
    <div className="w-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono flex flex-col">
      <div className="px-3 py-1.5 bg-white/10 flex items-center gap-2 border-b border-white/10">
        <TermIcon size={12} className="text-slate-400" />
        <span className="text-[10px] text-slate-400">bash - root@server</span>
      </div>
      <div className="p-3 text-[10px] text-green-400 space-y-1 h-32 overflow-hidden flex flex-col justify-end">
        {lines.map((line, i) => (
          <div key={i} className="opacity-90">{line}</div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const { language, t } = useLanguage();
  const cvPath = language === 'en' ? '/cv/cv_ang.pdf' : '/cv/cv_fr.pdf';

  // High-performance spring-based mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* 3D PARALLAX CONTAINER FOR WIDGETS */}
      <div className="absolute inset-0 z-0 pointer-events-none perspective-[1000px] flex items-center justify-center">
        
        {/* AI Widget (Top Right, close) */}
        <motion.div 
          className="absolute right-[10%] top-[15%] will-change-transform"
          style={{ x: useTransform(smoothX, v => v * -100), y: useTransform(smoothY, v => v * -100) }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <AIWidget />
          </motion.div>
        </motion.div>

        {/* Cloud Widget (Bottom Right, far) */}
        <motion.div 
          className="absolute right-[5%] bottom-[15%] opacity-80 will-change-transform"
          style={{ x: useTransform(smoothX, v => v * -40), y: useTransform(smoothY, v => v * -40) }}
        >
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
            <CloudWidget />
          </motion.div>
        </motion.div>

        {/* Dev IDE (Top Left, medium) */}
        <motion.div 
          className="absolute left-[5%] top-[20%] will-change-transform hidden lg:block"
          style={{ x: useTransform(smoothX, v => v * 70), y: useTransform(smoothY, v => v * 70) }}
        >
           <motion.div animate={{ y: [0, -15, 0], rotate: [-1, 1, -1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
            <DevIDE />
          </motion.div>
        </motion.div>

        {/* Terminal (Bottom Left, close) */}
        <motion.div 
          className="absolute left-[10%] bottom-[10%] will-change-transform hidden xl:block"
          style={{ x: useTransform(smoothX, v => v * 120), y: useTransform(smoothY, v => v * 120) }}
        >
           <motion.div animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}>
            <TerminalWidget />
          </motion.div>
        </motion.div>

      </div>

      {/* CORE CONTENT (Center) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-purple-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-fast" />
            <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">{t('hero.subtitle')}</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Yahya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-500">
              Bouchak
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 items-center justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:scale-105 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                {t('hero.contactBtn')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href={cvPath}
              download
              className="flex items-center gap-2 text-slate-300 font-semibold px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
            >
              <FileText size={18} className="text-cyan-400" />
              <span>{t('hero.downloadCV')}</span>
            </a>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-subtle {
          animation: float-subtle 3s ease-in-out infinite;
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
