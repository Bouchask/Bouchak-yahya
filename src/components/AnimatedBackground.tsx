import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CYBER-TECH BACKGROUND
 * Optimized Neural Mesh and Data Streams
 */

// Simple Data Stream Component
const DataStream = ({ delay, left, duration }: { delay: number, left: string, duration: number }) => {
  const symbols = ['0', '1', '{', '}', '<', '/>', '[]', '()'];
  const streamText = useMemo(() => Array.from({ length: 15 }).map(() => symbols[Math.floor(Math.random() * symbols.length)]), []);

  return (
    <motion.div
      className="absolute top-[-20%] text-cyan-500/20 font-mono text-xs whitespace-pre"
      style={{ left, willChange: 'transform' }}
      animate={{ y: ['0vh', '120vh'] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
        delay: delay
      }}
    >
      <div className="flex flex-col gap-4">
        {streamText.map((char, i) => (
          <span key={i} className={i === streamText.length - 1 ? 'text-white/40 glow-cyan' : ''}>
            {char}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Static Neural Mesh with Mouse Glow Reveal
const NeuralMesh = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  // Generate random stable nodes
  const nodes = useMemo(() => Array.from({ length: 40 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  })), []);

  return (
    <div className="absolute inset-0 z-0 opacity-40">
      {/* Base faint mesh */}
      <svg className="absolute inset-0 w-full h-full stroke-purple-500/10 stroke-[0.5]">
        {nodes.map((n1, i) => (
          nodes.slice(i + 1, i + 4).map((n2, j) => (
            <line key={`${i}-${j}`} x1={`${n1.x}%`} y1={`${n1.y}%`} x2={`${n2.x}%`} y2={`${n2.y}%`} />
          ))
        ))}
      </svg>
      
      {/* Highlighted mesh revealed by mouse */}
      <motion.svg 
        className="absolute inset-0 w-full h-full stroke-cyan-400/50 stroke-[1.5] filter drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
        style={{
          WebkitMaskImage: useSpring(mouseX), // We will apply mask via CSS in parent for better performance, but framer motion mask is possible
        }}
      >
        {nodes.map((n1, i) => (
          nodes.slice(i + 1, i + 4).map((n2, j) => (
            <line key={`glow-${i}-${j}`} x1={`${n1.x}%`} y1={`${n1.y}%`} x2={`${n2.x}%`} y2={`${n2.y}%`} />
          ))
        ))}
      </motion.svg>
    </div>
  );
};

const AnimatedBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 bg-[#050508] overflow-hidden pointer-events-none">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050508] to-[#000000]" />

      {/* Data Streams */}
      {Array.from({ length: 15 }).map((_, i) => (
        <DataStream 
          key={i} 
          left={`${(i + 1) * 7}%`} 
          delay={Math.random() * -20} 
          duration={15 + Math.random() * 15} 
        />
      ))}

      {/* Neural Mesh Masker */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      >
        <NeuralMesh mouseX={mousePos.x} mouseY={mousePos.y} />
      </div>

      {/* Static Base Mesh so it's not totally black */}
      <div className="absolute inset-0 z-0 opacity-20">
        <NeuralMesh mouseX={-1000} mouseY={-1000} />
      </div>

      {/* Ambient Pulsing Orbs (Hardware Accelerated) */}
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-purple-900/20 rounded-full blur-[100px] animate-pulse-slow will-change-transform" />
      <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse-slow will-change-transform" style={{ animationDelay: '-5s' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .glow-cyan {
          text-shadow: 0 0 10px rgba(34,211,238,0.8);
        }
      `}} />
    </div>
  );
};

export default AnimatedBackground;
