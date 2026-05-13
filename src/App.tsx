/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ThreeScene from './components/ThreeScene';
import SmoothScroll from './components/SmoothScroll';
import CEOSection from './components/CEOSection';
import Transformation from './components/Transformation';
import TimelineSection from './components/TimelineSection';
import FAQ from './components/FAQ';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-white text-sm">DS</div>
            <span className="font-bold text-xl tracking-tight uppercase">DS Company</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            A formação definitiva para quem busca ser a elite no desenvolvimento de Mini SaaS mundiais.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Formação</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Método Elite</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Módulos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Certificação</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Suporte</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Área do Aluno</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Social</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="https://instagram.com/layon.dev" target="_blank" className="hover:text-white transition-colors">@layon.dev</a></li>
            <li><a href="https://instagram.com/davi_.link" target="_blank" className="hover:text-white transition-colors">@davi_.link</a></li>
            <li><a href="https://instagram.com/dscompany1_" target="_blank" className="hover:text-white transition-colors">@dscompany1_</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs text-center md:text-left">
          © 2026 DS Company. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 grayscale opacity-50">
           <span className="text-[10px] text-white/40">Made with High Performance</span>
        </div>
      </div>
    </footer>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-primary/20 backdrop-blur-3xl -z-10" />
        <div className="bg-linear-to-b from-white/10 to-transparent p-12 md:p-24 text-center border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 glow-text">O seu futuro no SaaS começa aqui.</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Não espere o mercado ficar saturado. Junte-se à elite da DS Company e construa sua própria liberdade.
          </p>
          <a 
            href="https://pay.kiwify.com.br/qxuOA3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl active:scale-95"
          >
            Quero Me Inscrever Agora
          </a>
        </div>
      </div>
    </section>
  );
}

function ScarcityBanner() {
  return (
    <div className="bg-brand-primary py-2 px-6 text-center text-xs font-bold tracking-widest uppercase text-white z-[60] relative">
      Oferta por tempo limitado: De R$ 967 por apenas R$ 39,90. 
      <span className="ml-2 underline">Vagas quase esgotadas!</span>
    </div>
  );
}

function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 right-6 z-50 md:hidden transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a 
        href="https://pay.kiwify.com.br/qxuOA3n"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-brand-primary text-white py-4 rounded-2xl font-bold shadow-[0_10px_30px_rgba(99,102,241,0.4)] active:scale-95 text-center"
      >
        Garantir Vaga por R$ 39,90
      </a>
    </div>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative">
        <ScarcityBanner />
        <MobileStickyCTA />
        <ThreeScene />
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Transformation />
            <TimelineSection />
            <Features />
            <CEOSection />
            <Pricing />
            <FAQ />
            <CTASection />
          </motion.div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

