import React, { useEffect, useState } from 'react';

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
    <div 
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pointer-events-none"
    >
      {/* Interactive Cursor Glow */}
      <div 
        className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0 opacity-80"
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>

          <symbol id="icon-cloud-neon" viewBox="0 0 24 24" fill="none" stroke="url(#cloud-grad)" strokeWidth="1.5">
            <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.4C17.7 6.3 14.4 4 10.5 4 7.1 4 4.3 6 3.2 9c-1.8.4-3.2 2.1-3.2 4 0 2.2 1.8 4 4 4h13.5z"/>
          </symbol>
        </defs>

        {/* AI Neural Network Mesh (Background) */}
        <g className="neural-net">
          {/* Nodes */}
          <circle cx="200" cy="700" r="3" fill="#06b6d4" filter="url(#cyan-glow)" />
          <circle cx="400" cy="550" r="4" fill="#8b5cf6" filter="url(#neon-glow)" />
          <circle cx="600" cy="800" r="2" fill="#06b6d4" filter="url(#cyan-glow)" />
          <circle cx="800" cy="650" r="5" fill="#f59e0b" filter="url(#neon-glow)" />
          <circle cx="1000" cy="750" r="3" fill="#8b5cf6" filter="url(#neon-glow)" />
          
          {/* Connections */}
          <path d="M200,700 L400,550 L600,800 L800,650 L1000,750" className="net-line" />
          <path d="M400,550 L800,650" className="net-line" />
          <path d="M200,700 Q400,850 600,800" className="net-line" />
        </g>

        {/* Cloud Data Stream */}
        <g className="cloud-section floating-medium">
          <use href="#icon-cloud-neon" x="100" y="100" width="120" height="120" filter="url(#neon-glow)" />
          {/* Data Packets Firing */}
          <path d="M180,180 Q300,300 450,250" className="data-stream" />
          <path d="M200,160 C400,100 600,300 800,200" className="data-stream-cyan" />
          <circle cx="0" cy="0" r="3" fill="#f59e0b" className="packet-1" filter="url(#neon-glow)" />
          <circle cx="0" cy="0" r="2" fill="#06b6d4" className="packet-2" filter="url(#cyan-glow)" />
        </g>
      </svg>

      {/* HTML Elements Layer */}
      <div className="absolute inset-0">
        
        {/* Floating Code Terminal 1 */}
        <div className="absolute top-[20%] left-[30%] w-[320px] rounded-xl border border-purple-500/30 bg-[#1e1b4b]/60 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.2)] p-4 floating-slow">
          <div className="flex gap-2 mb-3 border-b border-purple-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="ml-2 text-xs text-purple-300/70 font-mono">ai_core.ts</span>
          </div>
          <div className="font-mono text-sm">
            <div className="text-purple-400 terminal-type-1">{"async function optimizeNeuralNet() {"}</div>
            <div className="text-cyan-300 terminal-type-2 ml-4">{"const model = await loadModel();"}</div>
            <div className="text-yellow-400 terminal-type-3 ml-4">{"model.train({ epochs: 100 });"}</div>
            <div className="text-purple-400 terminal-type-4">{"}"}</div>
          </div>
        </div>

        {/* Floating Code Terminal 2 */}
        <div className="absolute top-[60%] left-[10%] w-[280px] rounded-xl border border-cyan-500/30 bg-[#082f49]/60 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.2)] p-4 floating-reverse">
          <div className="flex gap-2 mb-3 border-b border-cyan-500/20 pb-2">
            <span className="text-xs text-cyan-300/70 font-mono">~ bash</span>
          </div>
          <div className="font-mono text-sm">
            <div className="text-green-400">{"$ npm run deploy"}</div>
            <div className="text-slate-300 terminal-type-fast mt-1">{"[OK] Building project..."}</div>
            <div className="text-cyan-300 terminal-type-fast-2 mt-1">{"[OK] Uploaded to Cloud"}</div>
          </div>
        </div>

        {/* Git Branch Timeline (Right Side) */}
        <div className="absolute right-[5%] top-[25%] h-[600px] w-40 flex flex-col items-start pt-10">
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
          
          <div className="relative mb-16 pl-8 git-node-anim-1">
            <div className="absolute left-0 w-6 h-6 bg-[#0f0c29] border-2 border-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10"></div>
            <span className="text-cyan-300 text-xs font-mono tracking-wider shadow-cyan-500/50 drop-shadow-md">v1.0 release</span>
          </div>
          
          <div className="relative mb-16 pl-8 git-node-anim-2">
            <div className="absolute left-0 w-6 h-6 bg-[#0f0c29] border-2 border-purple-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10"></div>
            <span className="text-purple-300 text-xs font-mono tracking-wider drop-shadow-md">AI module active</span>
          </div>

          <div className="relative mb-16 pl-8 git-node-anim-3">
            <div className="absolute left-0 w-6 h-6 bg-[#0f0c29] border-2 border-yellow-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] z-10"></div>
            <span className="text-yellow-300 text-xs font-mono tracking-wider drop-shadow-md">cloud infra setup</span>
          </div>

          <div className="relative pl-8 git-node-anim-4">
            <div className="absolute left-0 w-6 h-6 bg-[#0f0c29] border-2 border-slate-400 rounded-full z-10 opacity-50"></div>
            <span className="text-slate-400 text-xs font-mono tracking-wider">init commit</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Data Streams */
        .data-stream {
          fill: none;
          stroke: #8b5cf6;
          stroke-width: 1.5;
          stroke-dasharray: 6 12;
          opacity: 0.5;
          animation: stream 20s linear infinite;
        }
        .data-stream-cyan {
          fill: none;
          stroke: #06b6d4;
          stroke-width: 1;
          stroke-dasharray: 4 8;
          opacity: 0.5;
          animation: stream 15s linear infinite reverse;
        }

        @keyframes stream {
          to { stroke-dashoffset: -200; }
        }

        /* Moving Packets */
        .packet-1 {
          offset-path: path("M180,180 Q300,300 450,250");
          animation: movePacket 4s linear infinite;
        }
        .packet-2 {
          offset-path: path("M200,160 C400,100 600,300 800,200");
          animation: movePacket 6s linear infinite 1s;
        }

        @keyframes movePacket {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        /* Neural Net Lines */
        .net-line {
          fill: none;
          stroke: rgba(139, 92, 246, 0.2);
          stroke-width: 1;
        }

        /* Floating Parallax */
        .floating-slow { animation: float 12s ease-in-out infinite; }
        .floating-medium { animation: float 8s ease-in-out infinite 1s; }
        .floating-reverse { animation: float-rev 10s ease-in-out infinite 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-rev {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-1deg); }
        }

        /* Typewriter Effects */
        .terminal-type-1 { overflow: hidden; white-space: nowrap; animation: typing 6s steps(30) infinite; }
        .terminal-type-2 { overflow: hidden; white-space: nowrap; animation: typing 6s steps(30) infinite; animation-delay: 1.5s; opacity: 0; animation-fill-mode: forwards; }
        .terminal-type-3 { overflow: hidden; white-space: nowrap; animation: typing 6s steps(30) infinite; animation-delay: 3s; opacity: 0; animation-fill-mode: forwards; }
        .terminal-type-4 { overflow: hidden; white-space: nowrap; animation: typing 6s steps(30) infinite; animation-delay: 4.5s; opacity: 0; animation-fill-mode: forwards; }
        
        .terminal-type-fast { overflow: hidden; white-space: nowrap; animation: typing 4s steps(20) infinite; animation-delay: 1s; opacity: 0; animation-fill-mode: forwards; }
        .terminal-type-fast-2 { overflow: hidden; white-space: nowrap; animation: typing 4s steps(20) infinite; animation-delay: 2s; opacity: 0; animation-fill-mode: forwards; }

        @keyframes typing {
          0% { width: 0; opacity: 1; }
          30% { width: 100%; opacity: 1; }
          90% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }

        /* Git Timeline Pulses */
        .git-node-anim-1 { animation: gitPulse 4s infinite 0s; }
        .git-node-anim-2 { animation: gitPulse 4s infinite 1s; }
        .git-node-anim-3 { animation: gitPulse 4s infinite 2s; }

        @keyframes gitPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default AnimatedBackground;
