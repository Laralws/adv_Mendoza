import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx="true">{`
        @keyframes pulse-prata-reluzente {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .bg-prata-brilhoso {
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 45%, #94a3b8 100%);
          border: 1px solid #ffffff;
        }
        @keyframes sweepContinuous {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40%, 100% { transform: translateX(150%) skewX(-30deg); }
        }
        .shimmer-layer {
          position: absolute; inset: 0; overflow: hidden; border-radius: 9999px; z-index: 5;
        }
        .shimmer-line {
          position: absolute; top: 0; height: 100%; width: 40%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: sweepContinuous 3s infinite ease-in-out;
        }
      `}</style>

      <nav className={`font-sans w-full fixed top-0 z-[100] transition-all duration-500 antialiased ${
        isScrolled || mobileMenuOpen ? 'bg-[#46738A] shadow-lg' : 'bg-transparent'
      }`}>
        
        <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-7'
        }`}>
          
          {/* LOGO (Esquerda) */}
          <a href="#inicio" className="flex items-center shrink-0 z-[110]">
            <img 
              src="/logo.png" 
              alt="Mendoza Advogados" 
              className="h-9 md:h-12 w-auto object-contain brightness-0 invert" 
            />
          </a>

          {/* DESKTOP MENU (Direita) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 font-medium text-[12px] uppercase tracking-[0.2em] text-white/90">
              <a href="#inicio" className="hover:text-white transition-all">Início</a>
              <a href="#sobre" className="hover:text-white transition-all">Sobre</a>
              <a href="#atuacao" className="hover:text-white transition-all">Atuação</a>
              <a href="#contato" className="hover:text-white transition-all">Contato</a>
              <a href="#faq" className="hover:text-white transition-all">FAQ</a>
            </div>

            <a 
              href="https://wa.me/5583993754000" 
              className="relative px-7 py-2.5 rounded-full font-normal text-[11px] uppercase tracking-widest text-[#050C16] bg-prata-brilhoso shadow-xl animate-[pulse-prata-reluzente_2s_infinite]"
            >
              <div className="shimmer-layer"><div className="shimmer-line"></div></div>
              <span className="relative z-10">Agendar Consulta</span>
            </a>
          </div>

          {/* BOTÃO HAMBÚRGUER (Mobile) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-[110] text-white p-2 focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

        </div>

        {/* OVERLAY MENU MOBILE */}
        <div className={`fixed inset-0 bg-[#46738A] transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <div className="flex flex-col items-center gap-6 text-center">
              {['Início', 'Sobre', 'Atuação', 'Contato', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl font-light tracking-widest uppercase hover:text-white/70 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>

            <a 
              href="https://wa.me/5583993754000"
              className="mt-4 relative px-10 py-4 rounded-full font-normal text-sm uppercase tracking-widest text-[#050C16] bg-prata-brilhoso text-center"
            >
              Agendar Consulta Jurídica
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;