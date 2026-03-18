import React from 'react';

const Contact = () => {
  const coresEstatua = {
    azulGrafite: '#1A242F',
    brilhoMaximo: '#FFFFFF', 
    azulFundo: '#050C16'
  };

  // ESTILO DE AÇO ESCOVADO PARA O TEXTO "IMPLACÁVEL"
  const estiloAcoSolida = {
    backgroundImage: `linear-gradient(135deg, #7a8c9f 0%, #ffffff 50%, #7a8c9f 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'contrast(1.6) brightness(1.2) drop-shadow(0 2px 10px rgba(255,255,255,0.2))'
  };

  // =======================================================
  // NOVO ESTILO: AZUL SAFIRA ESCURO (DEEP SAPPHIRE) METÁLICO
  // =======================================================
  const estiloBotaoMendozaDark = {
    // Base escura e sóbria de Azul Safira Profundo
    backgroundColor: '#0A1A2F', 
    // Brilho interno sutil que simula o metal polido nas bordas
    boxShadow: `
      0 4px 15px rgba(0,0,0,0.5), 
      inset 0 1px 1px rgba(255,255,255,0.1), /* Brilho de quina superior */
      inset 0 0 10px rgba(70,115,138,0.2)   /* Reflexo azul sutil interno */
    `,
    // Contraste sutil no hover
    transition: 'all 0.4s ease-in-out',
    border: '1px solid rgba(70,115,138,0.3)' // Borda fina de aço azul
  };

  return (
    <section 
      id="contato" 
      className="relative w-full py-20 md:py-32 bg-cover bg-center flex items-center overflow-hidden" 
      style={{ backgroundImage: "url('/back-04.png')", backgroundColor: coresEstatua.azulFundo }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        
        {/* LADO ESQUERDO: Foco em Saúde e Dignidade */}
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <div className="w-12 h-[2px] bg-white mb-6 mx-auto md:mx-0 opacity-100"></div>
          
          <h5 className="font-serif text-white leading-tight mb-8">
            <span className="text-xl md:text-3xl block mb-2 uppercase tracking-wide opacity-100">
              Sua saúde e sua dignidade exigem
            </span>
            <span className="text-2xl md:text-[38px] block font-semibold uppercase tracking-tight opacity-100">
              Defesa jurídica <span style={estiloAcoSolida} className="inline-block font-bold">implacável</span>
            </span>
          </h5>
          
          <p className="text-white font-light text-[14px] md:text-base leading-relaxed mb-10 opacity-90">
            Não enfrente negações de saúde ou injustiças sozinho. Nossa equipe está pronta para agir com urgência e rigor técnico para garantir seus direitos fundamentais.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-white">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white bg-white/10">
              <i className="ri-heart-pulse-line text-xl md:text-2xl text-white"></i>
            </div>
            <span className="font-serif text-[9px] md:text-[11px] uppercase tracking-widest text-left leading-tight opacity-100">
              Humanidade, Urgência<br className="md:hidden"/> e Especialização.
            </span>
          </div>
        </div>

        {/* LADO DIREITO: Card de Vidro com links Mendoza */}
        <div className="md:justify-self-end w-full max-w-md bg-white/[0.05] backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl mx-auto md:mx-0">
          <div className="text-center mb-6 md:mb-8">
            <h4 className="text-white uppercase tracking-[0.3em] text-[10px] font-bold mb-2 opacity-100">
              Atendimento Prioritário
            </h4>
            <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight opacity-100">
              Fale com um Especialista
            </h3>
            <p className="text-white text-xs mt-4 opacity-80">
              Atendimento digital especializado para todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Telefone Mendoza */}
            <a href="tel:+5583993754000" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-wider shadow-lg">
              <i className="ri-phone-fill text-lg"></i> Ligar
            </a>
            {/* Instagram Mendoza */}
            <a href="https://www.instagram.com/mendozaadvogados.saude/" target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-wider shadow-lg">
              <i className="ri-instagram-line text-lg"></i> Instagram
            </a>
          </div>

          {/* ======================================================= */}
          {/* BOTÃO WHATSAPP: AGORA AZUL SAFIRA ESCURO, CHIC E SERIFADO */}
          {/* ======================================================= */}
          <a 
            href="https://wa.me/5583993754000" 
            target="_blank" 
            rel="noopener noreferrer"
            // Mudança para 'font-serif' e peso 'font-medium' (elegante)
            className="relative w-full py-4 rounded-xl font-serif font-medium text-[12px] md:text-[14px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 overflow-hidden active:scale-95 transition-all duration-300 mt-2 shadow-2xl animate-piscarBotao group"
            style={{ 
              ...estiloBotaoMendozaDark, // Aplica o gradiente metálico escuro
              color: '#E2C08A',          // Texto Dourado Champagne Pálido (Chic)
            }}
          >
            {/* Efeito shimmer (brilho corrido) - Mantido e ultra-sutil */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-brilhoCorrido"></div>
            </div>
            
            {/* Overlay de hover sutil para clarear metal */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
            
            {/* Ícone e Texto Dourados com leve drop-shadow */}
            <i className="ri-whatsapp-line text-xl relative z-10 text-[#E2C08A] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"></i> 
            <span className="relative z-10 text-[#E2C08A] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Iniciar Consulta Online</span>
          </a>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes brilhoCorrido {
          0% { transform: translateX(-100%); }
          15% { transform: translateX(100%); } /* Brilho ultra-rápido e sutil */
          100% { transform: translateX(100%); }
        }
        @keyframes piscarBotao {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.08); } /* Piscar quase imperceptível */
          100% { filter: brightness(1); }
        }
        .animate-brilhoCorrido {
          animation: brilhoCorrido 5s infinite ease-in-out; /* Ciclo bem longo */
        }
        .animate-piscarBotao {
          animation: piscarBotao 4s infinite ease-in-out; /* Ciclo bem longo */
        }
      `}</style>
    </section>
  );
};

export default Contact;