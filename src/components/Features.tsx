import { motion } from 'motion/react';
import { Database, Zap, Lock, BarChart3, Cloud, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
  {
    title: "Banco de Dados Real-time",
    description: "Sincronize dados entre todos os seus clientes em milissegundos. Aprenda SQLiteCloud e Flask do jeito certo.",
    icon: Database,
    className: "md:col-span-2",
    color: "text-blue-400"
  },
  {
    title: "Deploy Instantâneo",
    description: "Pare de sofrer com configurações complexas. Publique seu SaaS em segundos com nosso método de deploy.",
    icon: Cloud,
    className: "md:col-span-1",
    color: "text-emerald-400"
  },
  {
    title: "Autenticação Elite",
    description: "Segurança de nível bancário com login integrado, multi-inquilino e controle de acesso total.",
    icon: Lock,
    className: "md:col-span-1",
    color: "text-purple-400"
  },
  {
    title: "Analytics Comportamental",
    description: "Entenda exatamente o que seus usuários fazem. Tome decisões baseadas em dados reais.",
    icon: BarChart3,
    className: "md:col-span-2",
    color: "text-orange-400"
  },
  {
    title: "Arquitetura Escalável",
    description: "Crie sistemas preparados para aguentar milhares de acessos simultâneos sem travar.",
    icon: Code2,
    className: "md:col-span-1",
    color: "text-cyan-400"
  },
  {
    title: "Velocidade Extrema",
    description: "Otimize cada milissegundo. Experiência de usuário fluida que retém e converte.",
    icon: Zap,
    className: "md:col-span-1",
    color: "text-yellow-400"
  }
];

export default function Features() {
  return (
    <section id="beneficios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">O Que Você Vai Construir</h2>
        <p className="text-white/60 max-w-2xl mx-auto">Não é apenas teoria. Você vai sair do zero ao seu primeiro Mini SaaS publicado, funcional e pronto para faturar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl glass p-8 hover:bg-white/[0.07] transition-all",
              feature.className
            )}
          >
            <div className={cn("p-3 rounded-xl w-fit glass mb-6", feature.color)}>
              <feature.icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-white/50 leading-relaxed">{feature.description}</p>
            
            {/* Background Glow on Hover */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
