import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Clock, Code, Database, Layout, Rocket, Zap } from 'lucide-react';

const steps = [
  { time: "08:00", title: "Arquitetura & Backend", desc: "Definindo a base do sistema usando Vibecode.", icon: Database },
  { time: "10:00", title: "Banco de Dados Elite", desc: "Conexão com SQLiteCloud e estruturação de dados.", icon: Code },
  { time: "13:00", title: "Dashboard & Interface", desc: "Construindo uma UI premium que converte.", icon: Layout },
  { time: "16:00", title: "Autenticação & Regras", desc: "Segurança total e controle de acesso.", icon: Zap },
  { time: "20:00", title: "SaaS em Produção", desc: "Deploy final e sistema pronto para o primeiro cliente.", icon: Rocket },
];

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-24">
         <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text tracking-tighter">O Cronograma da Sua Liberdade</h2>
         <p className="text-white/60 text-lg">De estranho a dono de software em menos de 24 horas.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
        <motion.div 
          style={{ scaleY: pathLength, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary -translate-x-1/2 z-10"
        />

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div 
              key={step.time}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon Circle */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border-brand-primary flex items-center justify-center z-20 bg-black">
                <step.icon className="w-5 h-5 text-brand-primary" />
              </div>

              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`glass p-8 rounded-3xl border-white/5 relative group hover:bg-white/[0.05] transition-all ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="inline-flex items-center gap-2 mb-4 text-brand-primary font-mono text-sm font-bold">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
