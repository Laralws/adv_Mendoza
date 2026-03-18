import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="relative pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/10 bg-cover bg-center font-['Inter'] overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Camada de overlay removida completamente */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-10 md:mb-12">
          
          {/* COLUNA 1: Logo e Descrição */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:col-start-2 text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/logo.png" 
              alt="Mendoza Advogados" 
              className="h-12 md:h-16 w-auto mb-6 md:mb-10 opacity-90 drop-shadow-lg" 
            />
            <p className="text-white text-[11px] md:text-[12px] leading-relaxed px-4 md:px-0 md:pr-10 drop-shadow-md font-medium">
              Mendoza Advogados — Especialistas em Direito à Saúde e defesa do paciente. Atuação estratégica em todo o Brasil.
            </p>
          </div>

          {/* COLUNA 2: Acompanhe */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 lg:col-start-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] mb-4 md:mb-6 font-bold drop-shadow-md">
              Acompanhe
            </h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/mendozaadvogados.saude/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm transition-all shadow-lg">
                <i className="ri-instagram-line text-base md:text-sm"></i>
              </a>
              <a href="https://wa.me/5583993754000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-9 md:h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm transition-all shadow-lg">
                <i className="ri-whatsapp-line text-base md:text-sm"></i>
              </a>
            </div>
          </div>
          
        </div>

        {/* LINHA INFERIOR */}
        <div className="border-t border-white/20 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 lg:px-8">
          <p className="text-[9px] md:text-[10px] text-white uppercase tracking-[0.1em] md:tracking-[0.2em] text-center font-bold drop-shadow-md">
            &copy; {new Date().getFullYear()} Mendoza Advogados. Desenvolvido por {' '}
            <a 
              href="https://includeengenharia.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-200 transition-colors underline decoration-white/40 underline-offset-4"
            >
              INCLUDE ENGENHARIA
            </a>.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white hover:scale-110 text-[9px] md:text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 py-2 px-4 border border-white/20 rounded-full bg-black/10 backdrop-blur-sm"
          >
            Voltar ao topo <i className="ri-arrow-up-line"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;