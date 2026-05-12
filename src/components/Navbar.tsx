import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/kgmY092W/image-removebg-preview-(20).png" 
            alt="DS Company" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block uppercase">DS Company</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
          <a href="#metodo" className="hover:text-white transition-colors">Método</a>
          <a href="#valores" className="hover:text-white transition-colors">Preços</a>
          <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all active:scale-95">
          Garantir Vaga
        </button>
      </div>
    </nav>
  );
}
