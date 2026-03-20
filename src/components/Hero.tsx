import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Terminal, Code2, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * PERFORMANCE NOTES:
 * 1. Hardware Acceleration: Using only 'transform' and 'opacity'.
 * 2. will-change: Applied to all floating elements to promote to GPU layers.
 * 3. Static Assets: Background patterns are CSS-based (zero JS overhead).
 * 4. Limited DOM: Minimized the number of floating nodes.
 */

const CodeWindow = ({ 
  title, 
  code, 
  className, 
  delay = 0 
}: { 
  title: string; 
  code: React.ReactNode; 
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: -2 }}
    animate={{ 
      opacity: 1, 
      y: [0, -15, 0],
      rotate: [-1, 1, -1]
    }}
    transition={{
      opacity: { duration: 0.8, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
    }}
    style={{ willChange: 'transform' }}
    className={`absolute hidden lg:block z-0 pointer-events-none select-none rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden ${className}`}
  >
    {/* IDE Header */}
    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{title}</span>
    </div>
    {/* IDE Content */}
    <div className="p-5 font-mono text-[11px] leading-relaxed">
      {code}
    </div>
  </motion.div>
);

const GitGraph = () => (
  <svg 
    className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-64 opacity-[0.03] pointer-events-none z-0" 
    viewBox="0 0 100 400" 
    fill="none"
  >
    <path d="M50 0V400" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="3" fill="white" />
    <path d="M50 80C80 120 80 160 50 200" stroke="white" strokeWidth="0.5" />
    <circle cx="50" cy="110" r="2" fill="white" />
    <circle cx="72" cy="140" r="2" fill="white" />
    <circle cx="50" cy="200" r="3" fill="white" />
    <path d="M50 240C20 280 20 320 50 360" stroke="white" strokeWidth="0.5" />
    <circle cx="50" cy="280" r="2" fill="white" />
    <circle cx="50" cy="360" r="3" fill="white" />
  </svg>
);

const Hero = () => {
  const { language, t } = useLanguage();
  const cvPath = language === 'en' ? '/cv/cv_ang.pdf' : '/cv/cv_fr.pdf';

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Layer: CSS-only Grid & Glows */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <GitGraph />

      {/* Floating Code Windows (Hardware Accelerated) */}
      <CodeWindow 
        title="ai_model.py"
        className="top-[15%] right-[5%] w-72"
        delay={0.5}
        code={
          <div className="space-y-1">
            <div className="text-purple-400">def <span className="text-cyan-400">optimize_neural_net</span>(data):</div>
            <div className="pl-4 text-slate-400">model = Transformer.load(<span className="text-yellow-200">'v2.1'</span>)</div>
            <div className="pl-4 text-slate-400">results = model.predict(data)</div>
            <div className="pl-4 text-purple-400">return <span className="text-slate-300">results.normalize()</span></div>
          </div>
        }
      />

      <CodeWindow 
        title="Hero.tsx"
        className="bottom-[10%] left-[2%] w-80"
        delay={1.2}
        code={
          <div className="space-y-1">
            <div className="text-purple-400">const <span className="text-cyan-400">PortfolioHero</span> = () =&gt; &#123;</div>
            <div className="pl-4 text-slate-500">// Optimized for performance</div>
            <div className="pl-4 text-purple-400">return <span className="text-slate-300">(</span></div>
            <div className="pl-8 text-cyan-400">&lt;div <span className="text-slate-400">className=</span><span className="text-yellow-200">"hardware-accel"</span> /&gt;</div>
            <div className="pl-4 text-slate-300">)</div>
            <div className="text-purple-400">&#125;</div>
          </div>
        }
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Main Content */}
          <div className="space-y-10 max-w-2xl">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">System Online: v3.0.4</span>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Yahya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                  Bouchak
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Refining the intersection of <span className="text-white">Artificial Intelligence</span> and 
                <span className="text-white"> Modern Software Engineering</span>.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-slate-950 rounded-lg font-bold transition-all hover:bg-slate-100 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.contactBtn')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href={cvPath}
                download
                className="flex items-center gap-2 text-slate-300 font-semibold px-6 py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
              >
                <FileText size={18} className="text-purple-400" />
                <span>{t('hero.downloadCV')}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Photo */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/50 p-2 w-72 md:w-96 shadow-2xl backdrop-blur-3xl">
                <img
                  src="/assets/profile.png"
                  alt="Yahya Bouchak"
                  className="w-full h-full object-cover rounded-xl grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Micro-Details (Status Badges) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-md border border-white/5 rounded-xl">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest">Status</p>
                       <p className="text-xs font-bold text-white flex items-center gap-1.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Available for Hire
                       </p>
                     </div>
                     <Terminal size={18} className="text-cyan-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
