import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { FileJson } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="ide-window max-w-4xl mx-auto">
          <div className="ide-header justify-between">
            <div className="flex items-center gap-2">
              <FileJson size={14} className="text-neon-cyan" />
              <span className="text-[10px] text-slate-500">about_me.json</span>
            </div>
            <div className="text-[10px] text-slate-500">UTF-8</div>
          </div>
          
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex">
                <div className="text-slate-400 dark:text-slate-600 select-none pr-4 text-right border-r border-slate-200 dark:border-slate-800 mr-4">
                  {Array.from({ length: 18 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <div>
                  <span className="text-slate-500">&#123;</span><br />
                  <div className="pl-4">
                    <span className="text-neon-cyan">"name"</span><span className="text-slate-500">: </span><span className="text-neon-green">"Yahya Bouchak"</span><span className="text-slate-500">,</span><br />
                    <span className="text-neon-cyan">"title"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('hero.subtitle')}"</span><span className="text-slate-500">,</span><br />
                    <span className="text-neon-cyan">"location"</span><span className="text-slate-500">: </span><span className="text-neon-green">"Khouribga, Morocco"</span><span className="text-slate-500">,</span><br />
                    <span className="text-neon-cyan">"education"</span><span className="text-slate-500">: [</span><br />
                    <div className="pl-4">
                      <span className="text-slate-500">&#123; </span><span className="text-neon-cyan">"degree"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.master')}"</span><span className="text-slate-500">, </span><span className="text-neon-cyan">"status"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.inProgress')}"</span> <span className="text-slate-500">&#125;,</span><br />
                      <span className="text-slate-500">&#123; </span><span className="text-neon-cyan">"degree"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.bachelor')}"</span><span className="text-slate-500">, </span><span className="text-neon-cyan">"status"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.gradLastYear')}"</span> <span className="text-slate-500">&#125;,</span><br />
                      <span className="text-slate-500">&#123; </span><span className="text-neon-cyan">"degree"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.bts')}"</span><span className="text-slate-500">, </span><span className="text-neon-cyan">"status"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.gradHonors')}"</span> <span className="text-slate-500">&#125;</span><br />
                    </div>
                    <span className="text-slate-500">],</span><br />
                    <span className="text-neon-cyan">"bio"</span><span className="text-slate-500">: </span><span className="text-neon-green">"{t('about.p1')} {t('about.p2')}"</span><span className="text-slate-500">,</span><br />
                    <span className="text-neon-cyan">"soft_skills"</span><span className="text-slate-500">: [</span><br />
                    <div className="pl-4 text-neon-green">
                      "Problem Solving", "Autonomy", "Teamwork", "Adaptability"
                    </div>
                    <span className="text-slate-500">]</span><br />
                  </div>
                  <span className="text-slate-500">&#125;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
