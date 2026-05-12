import { motion } from 'motion/react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Pare de perder tempo. Comece a lucrar.</h2>
        <p className="text-white/60 max-w-2xl mx-auto">O mercado de software não perdoa quem é genérico. Ou você é elite, ou você é ignorado.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Pain Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[3rem] border-red-500/30 bg-red-500/[0.02] relative overflow-hidden group hover:border-red-500/50 transition-colors"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <XCircle className="w-32 h-32" />
          </div>
          <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
            <XCircle className="w-6 h-6" />
            Como é hoje:
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-white/70">Estuda teorias infinitas e nunca tira o projeto do papel.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-white/70">Depende de freelancers caros para qualquer pequena mudança.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-white/70">Sistemas feios, lentos e que não passam confiança para o cliente.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
              <p className="text-white/70">Frustração de ver outros lançando e você estagnado por falta de método.</p>
            </li>
          </ul>
        </motion.div>

        {/* Transformation Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[3rem] border-emerald-500/30 bg-emerald-500/[0.02] relative overflow-hidden group hover:border-emerald-500/50 transition-colors shadow-[0_0_40px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <CheckCircle2 className="w-32 h-32" />
          </div>
          <h3 className="text-2xl font-bold mb-8 text-emerald-400 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6" />
            Com a DS Company:
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0 animate-pulse" />
              <p className="text-white/70 font-medium">Mini SaaS publicado e funcional em menos de 1 hora.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0 animate-pulse" />
              <p className="text-white/70 font-medium">Independência total: você é o dono da tecnologia.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0 animate-pulse" />
              <p className="text-white/70 font-medium">Design Premium que vende sozinho e valoriza o seu lucro.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0 animate-pulse" />
              <p className="text-white/70 font-medium">Paz mental: um sistema escalável, seguro e automatizado.</p>
            </li>
          </ul>
        </motion.div>

        {/* Floating Connector */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-black rounded-full items-center justify-center shadow-2xl z-20">
          <ArrowRight className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
