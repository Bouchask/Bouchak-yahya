import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'system', text: 'Connection established.' },
    { sender: 'system', text: 'Type your message and press Enter to send, or type "mailto" to open email client.' }
  ]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const newCmd = input.trim();
      setMessages(prev => [...prev, { sender: 'guest', text: newCmd }]);
      setInput('');

      setTimeout(() => {
        if (newCmd.toLowerCase() === 'mailto') {
          window.location.href = 'mailto:mr.bouchakyahya@gmail.com';
          setMessages(prev => [...prev, { sender: 'system', text: 'Opening mail client...' }]);
        } else {
          setMessages(prev => [...prev, { sender: 'system', text: 'Message logged. I will reply to you soon. Contact via email directly at mr.bouchakyahya@gmail.com for faster response.' }]);
        }
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="ide-window max-w-3xl mx-auto h-[400px] flex flex-col">
          <div className="ide-header justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-slate-500" />
              <span className="text-[10px] text-slate-500">guest@portfolio: ~/contact</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
          
          <div className="p-6 font-mono text-sm leading-relaxed flex-1 overflow-y-auto bg-slate-50 dark:bg-[#09090b] flex flex-col justify-end">
            <div className="space-y-2 mb-4">
              {messages.map((msg, i) => (
                <div key={i} className="flex gap-2">
                  {msg.sender === 'system' ? (
                    <span className="text-slate-500">[{msg.sender}]</span>
                  ) : (
                    <span className="text-neon-cyan">guest@portfolio:~$</span>
                  )}
                  <span className={msg.sender === 'system' ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-neon-cyan">guest@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-200 font-mono text-sm focus:ring-0"
                placeholder="type a message..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-slate-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} Yahya Bouchak. All systems functional.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
