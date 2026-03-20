import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fcfcfd] dark:bg-slate-950 pointer-events-none">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-purple-200/30 dark:bg-purple-900/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-blue-200/30 dark:bg-blue-900/15 rounded-full blur-[100px]" />

      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <symbol id="icon-cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.4C17.7 6.3 14.4 4 10.5 4 7.1 4 4.3 6 3.2 9c-1.8.4-3.2 2.1-3.2 4 0 2.2 1.8 4 4 4h13.5z"/>
          </symbol>
          
          <symbol id="icon-brain" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9.5 2a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 7 4.5 2.5 2.5 0 0 1 9.5 2z"/>
            <path d="M14.5 2a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 12 4.5 2.5 2.5 0 0 1 14.5 2z"/>
            <path d="M21 12a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 5-5h1a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-1a5 5 0 0 1-5-5 1 1 0 0 1 2 0 3 3 0 0 0 3 3h1a4 4 0 0 1 4 4z"/>
            <path d="M3 12a4 4 0 0 0 4 4h1a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5H7a2 2 0 0 1-2-2 2 2 0 1 2-2h1a5 5 0 0 0 5-5 1 1 0 0 0-2 0 3 3 0 0 1-3 3H7a4 4 0 0 0-4 4z"/>
          </symbol>

          <symbol id="icon-terminal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
            <path d="M7 8l3 3-3 3" />
            <line x1="12" y1="14" x2="17" y2="14" />
          </symbol>
        </defs>

        {/* Global Connections (Data Flow) */}
        <g className="connections">
          <path d="M250,200 C400,100 800,100 950,200" className="flow-path pulse-1" />
          <path d="M250,600 C400,700 800,700 950,600" className="flow-path pulse-2" />
          <path d="M250,200 L950,600" className="flow-path pulse-3" />
          <path d="M950,200 L250,600" className="flow-path pulse-1" />
        </g>

        {/* Left Side: Cloud & AI (Infrastructure) */}
        <g className="infrastructure floating-slow">
          <use href="#icon-cloud" x="150" y="150" width="80" height="80" className="icon-purple" />
          <use href="#icon-brain" x="150" y="550" width="80" height="80" className="icon-blue" />
        </g>

        {/* Right Side: Dev & Time (Process) */}
        <g className="development floating-medium">
          {/* Terminal Window Graphic */}
          <g transform="translate(850, 150)">
            <rect width="250" height="150" rx="8" className="terminal-bg" />
            <use href="#icon-terminal" x="10" y="10" width="20" height="20" className="icon-white" />
            <text x="40" y="25" className="terminal-text-header">bash</text>
            <text x="15" y="60" className="terminal-code code-line-1">{"const init = () => {"}</text>
            <text x="30" y="90" className="terminal-code code-line-2">{"  deployToCloud();"}</text>
            <text x="15" y="120" className="terminal-code code-line-3">{"};"}</text>
          </g>

          {/* Git Commit Timeline (Vertical) */}
          <g transform="translate(950, 450)">
            <line x1="0" y1="0" x2="0" y2="250" className="git-line" />
            <circle cx="0" cy="20" r="6" className="git-node node-1" />
            <circle cx="0" cy="80" r="6" className="git-node node-2" />
            <circle cx="0" cy="140" r="6" className="git-node node-3" />
            <circle cx="0" cy="200" r="6" className="git-node node-4" />
            <text x="15" y="25" className="git-label">commit initial</text>
            <text x="15" y="85" className="git-label">feat: ai-core</text>
            <text x="15" y="145" className="git-label">fix: cloud-sync</text>
            <text x="15" y="205" className="git-label">v1.0 release</text>
          </g>
        </g>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .flow-path {
          fill: none;
          stroke: #8b5cf6;
          stroke-width: 1.5;
          stroke-opacity: 0.3;
          stroke-dasharray: 8, 150;
        }
        
        .pulse-1 { animation: dash 10s linear infinite; }
        .pulse-2 { animation: dash 12s linear infinite reverse; }
        .pulse-3 { animation: dash 8s linear infinite; }

        @keyframes dash {
          0% { stroke-dashoffset: 158; }
          100% { stroke-dashoffset: 0; }
        }

        .icon-purple { color: #8b5cf6; filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.2)); }
        .icon-blue { color: #3b82f6; filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.2)); }
        .icon-white { color: #8b5cf6; opacity: 0.6; }

        .terminal-bg { fill: #f8fafc; stroke: #e2e8f0; stroke-width: 1; }
        .terminal-text-header { font-family: monospace; font-size: 12px; fill: #94a3b8; }
        .terminal-code { font-family: monospace; font-size: 14px; fill: #8b5cf6; opacity: 0; }
        
        .code-line-1 { animation: type 6s steps(20) infinite; }
        .code-line-2 { animation: type 6s steps(20) infinite 2s; }
        .code-line-3 { animation: type 6s steps(20) infinite 4s; }

        @keyframes type {
          0%, 10% { opacity: 0; transform: translateX(-5px); }
          20%, 90% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; }
        }

        .git-line { stroke: #cbd5e1; stroke-width: 2; stroke-dasharray: 4 4; }
        .git-node { fill: #fff; stroke: #8b5cf6; stroke-width: 2; }
        .git-label { font-family: sans-serif; font-size: 11px; fill: #64748b; font-weight: 500; }

        .node-1 { animation: pulse-node 4s infinite 0s; }
        .node-2 { animation: pulse-node 4s infinite 1s; }
        .node-3 { animation: pulse-node 4s infinite 2s; }
        .node-4 { animation: pulse-node 4s infinite 3s; }

        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; fill: #8b5cf6; }
        }

        .floating-slow { animation: float 20s ease-in-out infinite; }
        .floating-medium { animation: float 15s ease-in-out infinite reverse; }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(20px, -30px, 0); }
        }
      `}} />
    </div>
  );
};

export default AnimatedBackground;
