import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const ceos = [
  {
    name: "João Layon",
    role: "CEO & Co-founder",
    handle: "@layon.dev",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    instagram: "https://instagram.com/layon.dev"
  },
  {
    name: "Paulo Davi",
    role: "CEO & Co-founder",
    handle: "@davi_.link",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    instagram: "https://instagram.com/davi_.link"
  }
];

export default function CEOSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="metodo">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter glow-text">
            Forjados no <br />campo de batalha.
          </h2>
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            Não somos teóricos. DS Company nasceu da necessidade real de criar softwares que escalam. João Layon e Paulo Davi uniram forças para entregar o que há de mais moderno em desenvolvimento SaaS.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 glass p-6 rounded-2xl">
              <div className="bg-brand-primary/20 p-3 rounded-full text-brand-primary">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Nos acompanhe no Instagram</h4>
                <p className="text-white/40 text-sm mb-4">Veja os bastidores e dicas diárias sobre desenvolvimento e negócios.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://instagram.com/layon.dev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 glass rounded-full text-xs font-bold hover:bg-white/10 transition-colors">@layon.dev</a>
                  <a href="https://instagram.com/davi_.link" target="_blank" rel="noopener noreferrer" className="px-4 py-2 glass rounded-full text-xs font-bold hover:bg-white/10 transition-colors">@davi_.link</a>
                  <a href="https://instagram.com/dscompany1_" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-brand-primary font-bold hover:underline transition-colors">@dscompany1_</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ceos.map((ceo, i) => (
            <motion.div 
              key={ceo.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass border-white/10 shadow-2xl"
            >
              <motion.img 
                src={ceo.image} 
                alt={ceo.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-700"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8 cursor-default">
                <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-1">{ceo.role}</p>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{ceo.name}</h3>
                <a href={ceo.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
                  <Instagram className="w-4 h-4" />
                  {ceo.handle}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
