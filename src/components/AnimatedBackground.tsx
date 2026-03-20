import React from 'react';

/**
 * OPTIMIZED BACKGROUND
 * Focuses on zero-lag by using CSS radial gradients instead of multiple DOM nodes.
 * Hardware acceleration is used for the very slow ambient pulsing.
 */
const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-20 bg-[#09090b] overflow-hidden pointer-events-none">
      {/* Static Grid Pattern (Zero JS Overhead) */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />

      {/* Primary Ambient Glows (Slowly Pulsing via CSS) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px] animate-ambient-pulse"
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] animate-ambient-pulse"
        style={{ animationDelay: '-4s' }}
      />
      
      {/* Extra Depth Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-950/20"
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ambient-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-ambient-pulse {
          animation: ambient-pulse 15s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}} />
    </div>
  );
};

export default AnimatedBackground;
