import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'system', text: 'Terminal session established.' },
    { sender: 'system', text: 'Commands: "mailto", "github", "linkedin", "clear". Or just type your message.' }
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const newCmd = input.trim();
      const cmdLower = newCmd.toLowerCase();
      setMessages(prev => [...prev, { sender: 'guest', text: newCmd }]);
      setInput('');

      setTimeout(() => {
        if (cmdLower === 'mailto') {
          window.location.href = 'mailto:mr.bouchakyahya@gmail.com';
          setMessages(prev => [...prev, { sender: 'system', text: 'Opening default mail client...' }]);
        } else if (cmdLower === 'github') {
          window.open('https://github.com/Bouchask', '_blank');
          setMessages(prev => [...prev, { sender: 'system', text: 'Redirecting to github.com/Bouchask [OK]' }]);
        } else if (cmdLower === 'linkedin') {
          window.open('https://linkedin.com/in/yahyabouchak', '_blank');
          setMessages(prev => [...prev, { sender: 'system', text: 'Redirecting to linkedin.com/in/yahyabouchak [OK]' }]);
        } else if (cmdLower === 'clear') {
          setMessages([
            { sender: 'system', text: 'Terminal cleared.' },
            { sender: 'system', text: 'Commands: "mailto", "github", "linkedin", "clear".' }
          ]);
        } else {
          setMessages(prev => [...prev, { 
            sender: 'system', 
            text: `Message received. For faster synchronization, use "mailto" or direct link commands.` 
          }]);
        }
      }, 400);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="ide-window max-w-3xl mx-auto h-[450px] flex flex-col transition-all duration-300 hover:glow-purple">
          <div className="ide-header justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-slate-500" />
              <span className="text-[10px] text-slate-500 font-mono tracking-tight">guest@portfolio: ~/contact --bash</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
          
          <div className="p-6 font-mono text-sm leading-relaxed flex-1 overflow-y-auto bg-slate-50 dark:bg-[#09090b] flex flex-col justify-end">
            <div className="space-y-3 mb-6">
              {messages.map((msg, i) => (
                <div key={i} className="flex gap-3">
                  {msg.sender === 'system' ? (
                    <span className="text-neon-purple opacity-80">[system]</span>
                  ) : (
                    <span className="text-neon-cyan">guest@portfolio:~$</span>
                  )}
                  <span className={msg.sender === 'system' ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-800 dark:text-slate-200'}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 items-center border-t border-slate-200 dark:border-slate-800 pt-4">
              <span className="text-neon-cyan shrink-0 font-bold">guest@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-200 font-mono text-sm focus:ring-0 p-0"
                placeholder="type 'github' or 'linkedin'..."
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
          <p>© {new Date().getFullYear()} Yahya Bouchak // Terminal Environment v4.0.2</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
