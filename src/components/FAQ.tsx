import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Preciso já saber programar?",
    a: "Não! O método foi desenhado para quem está começando do zero absoluto. Se você sabe ligar um computador, você consegue seguir o passo a passo da DS Company."
  },
  {
    q: "O acesso ao curso é vitalício?",
    a: "Sim. Uma vez que você entra para a elite, o conteúdo é seu para sempre, incluindo todas as atualizações futuras da plataforma e do método."
  },
  {
    q: "Quais tecnologias vou aprender?",
    a: "Focamos no que é rápido e eficiente: Vibecode, Python (Flask), SQLiteCloud e React/Next.js para o frontend premium. O objetivo é velocidade com qualidade."
  },
  {
    q: "O que é esse Vibecode?",
    a: "É o nosso workflow acelerado que permite criar lógicas complexas de backend e integrações sem precisar digitar milhares de linhas de código manualmente."
  },
  {
    q: "Terei suporte dos fundadores?",
    a: "Sim! Dependendo do seu plano, você tem acesso direto à nossa comunidade e mentorias periódicas com o João Layon e Paulo Davi."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Dúvidas Frequentes</h2>
        <p className="text-white/60">Tudo o que você precisa saber antes de se tornar Elite.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
            <button 
              onClick={() => setActive(active === i ? null : i)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-lg">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${active === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {active === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-white/50 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
