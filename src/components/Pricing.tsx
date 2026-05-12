import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const tiers = [
  {
    name: "Elite Academy",
    oldPrice: "R$ 967",
    price: "R$ 39,90",
    description: "Acesso completo à metodologia DS Company por um valor simbólico de lançamento.",
    features: [
      "Formação Mini SaaS Completa",
      "Método Vibecode (1 Dia)",
      "Templates de Dashboard Premium",
      "Acesso Vitalício",
      "Comunidade Exclusiva",
      "Certificado de Conclusão",
      "Suporte via Discord"
    ],
    button: "Garantir Minha Vaga",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="valores" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Investimento Único</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          O valor original de R$ 967 foi derrubado apenas para esta turma de lançamento. 
          Aproveite agora antes que o preço suba.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-[3rem] flex flex-col bg-brand-primary/10 border-2 border-brand-primary shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden"
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-brand-primary/20 blur-[60px] rounded-full" />
            
            <div className="absolute top-6 right-8">
              <div className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter animate-bounce">
                Oferta Exclusiva
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="flex flex-col">
                <span className="text-white/40 line-through text-lg mb-1">{tier.oldPrice}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black glow-text">{tier.price}</span>
                  <span className="text-white/40 text-sm">PAGAMENTO ÚNICO</span>
                </div>
              </div>
              <p className="text-white/50 mt-6 leading-relaxed">{tier.description}</p>
            </div>

            <div className="space-y-4 mb-10">
              {tier.features.map(feature => (
                <div key={feature} className="flex items-center gap-3 text-base font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-primary" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <button className="w-full py-5 rounded-2xl bg-brand-primary text-white text-xl font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95">
              {tier.button}
            </button>
            
            <p className="text-center text-white/30 text-xs mt-6">
              Compra 100% segura. Garantia de 7 dias ou seu dinheiro de volta.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
