import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, Globe, Terminal, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const TerminalLine = ({ text, delay }: { text: string; delay: number }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className="flex gap-2 font-mono text-[10px] md:text-xs">
      <span className="text-emerald-400">$</span>
      <span>{displayText}</span>
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8 text-xs font-medium text-brand-primary">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
            DS Company apresenta: Formação Mini SaaS Elite
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-gradient">
            Aprenda a desenvolver um <br />
            <span className="glow-text">Mini SaaS Profissional</span> em apenas 1 dia.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            Mesmo começando do zero, você vai aprender a criar backend, frontend, autenticação, dashboard, banco online e deploy profissional passo a passo com Vibecode.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="https://pay.kiwify.com.br/ddDJBqO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group active:scale-95 text-center"
            >
              Quero criar meu Mini SaaS
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://bio.site/Joao_Layon_DS_Company"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto glass text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Ver demonstração
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-40">
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-primary mb-1">Status</span>
              <span className="text-sm font-bold">2.000+ ALUNOS</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-primary mb-1">Deploy</span>
              <span className="text-sm font-bold">100% ONLINE</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-primary mb-1">Média</span>
              <span className="text-sm font-bold">1 DIA / SaaS</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-primary mb-1">Edição</span>
              <span className="text-sm font-bold">2026/VIBECODE</span>
            </div>
          </div>
        </motion.div>

        {/* Cinematic Preview Column */}
        <motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal */}
          <div className="glass rounded-xl overflow-hidden border-white/5 shadow-2xl mb-6 max-w-md ml-auto">
            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <Terminal className="w-4 h-4 text-white/40" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 font-bold">Nexus Terminal</span>
              <div className="flex gap-1.5 ml-auto">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-4 space-y-2 bg-black/40 min-h-[140px]">
              <TerminalLine text="Initializing Vibecode SaaS Engine..." delay={500} />
              <TerminalLine text="Creating landing page architecture..." delay={1500} />
              <TerminalLine text="Connecting SQLiteCloud Database..." delay={2500} />
              <TerminalLine text="Generating AI-driven Dashboard..." delay={3500} />
              <TerminalLine text="Deploying to Global Edge Nodes..." delay={4500} />
              <TerminalLine text="SaaS Online at: demo-saas.nexus.dev" delay={5500} />
            </div>
          </div>

          {/* Live Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6 }}
            className="glass rounded-2xl p-6 border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.2)] bg-black/60 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-primary to-brand-secondary" />
                <h4 className="font-bold text-sm">Nexus Analytics</h4>
              </div>
              <div className="flex gap-2">
                <div className="w-20 h-2 bg-white/5 rounded-full" />
                <div className="w-12 h-2 bg-brand-primary/20 rounded-full" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="w-8 h-1 bg-white/10 rounded-full mb-3" />
                  <div className="w-full h-8 bg-brand-primary/5 rounded-lg mb-2 animate-pulse" />
                  <div className="w-12 h-2 bg-white/5 rounded-full" />
                </div>
              ))}
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
              <div className="flex justify-between items-end gap-2 h-24">
                {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 6.5 + (i * 0.1), type: 'spring' }}
                    className="w-full bg-brand-primary opacity-50 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/30 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>

      {/* Hero Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}
