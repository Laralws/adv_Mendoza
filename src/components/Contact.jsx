import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contato" 
      className="relative w-full py-20 md:py-32 bg-cover bg-center flex items-center overflow-hidden font-['Inter']" 
      // Background puro com a imagem back-contact.png
      style={{ backgroundImage: "url('/back-contact.png')" }}
    >
      {/* Estilos das Animações Prata Reluzente */}
      <style jsx="true">{`
        @keyframes pulse-prata-reluzente {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        @keyframes sweepContinuous {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40%, 100% { transform: translateX(150%) skewX(-30deg); }
        }
        .bg-prata-brilhoso {
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 45%, #94a3b8 100%);
          border: 1px solid #ffffff;
        }
        .shimmer-layer-contact {
          position: absolute; inset: 0; overflow: hidden; border-radius: 12px; z-index: 5;
        }
        .shimmer-line-contact {
          position: absolute; top: 0; height: 100%; width: 40%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent);
          animation: sweepContinuous 3s infinite ease-in-out;
        }
      `}</style>

      {/* Camada de overlay removida para deixar a imagem de fundo brilhar sozinha */}
      
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        
        {/* LADO ESQUERDO: Textos com drop-shadow para garantir leitura sobre a imagem */}
        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <div className="w-12 h-[2px] bg-[#cbd5e1] mb-6 mx-auto md:mx-0 shadow-sm"></div>
          
          <h5 className="font-serif text-white leading-tight mb-8 drop-shadow-lg">
            <span className="text-xl md:text-4xl block mb-2 uppercase tracking-tight">
              Sua saúde e sua dignidade<br /> exigem 
              <span className="block mt-2 font-bold text-[#cbd5e1]">Defesa jurídica implacável</span>
            </span>
          </h5>
          
          <p className="text-white font-light text-[14px] md:text-lg leading-relaxed mb-10 drop-shadow-md">
            Não enfrente negações de saúde ou injustiças sozinho. Nossa equipe está pronta para agir com urgência e rigor técnico para garantir seus direitos fundamentais.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-white">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm">
              <i className="ri-heart-pulse-line text-xl md:text-2xl text-[#cbd5e1]"></i>
            </div>
            <span className="text-[#cbd5e1] font-sans text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold drop-shadow-md">
              Humanidade, Urgência<br className="md:hidden"/> e Especialização.
            </span>
          </div>
        </div>

        {/* LADO DIREITO: Card de Vidro Espelhado */}
        <div className="md:justify-self-end w-full max-w-md bg-white/[0.05] backdrop-blur-xl border border-white/20 p-6 md:p-10 rounded-3xl shadow-2xl mx-auto md:mx-0">
          <div className="text-center mb-8">
            <h4 className="text-[#cbd5e1] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
              Atendimento Prioritário
            </h4>
            <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight">
              Fale com um Especialista
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <a href="tel:+5583993754000" className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest backdrop-blur-md">
              <i className="ri-phone-fill text-lg"></i> Ligar
            </a>
            <a href="https://www.instagram.com/mendozaadvogados.saude/" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] uppercase tracking-widest backdrop-blur-md">
              <i className="ri-instagram-line text-lg"></i> Instagram
            </a>
          </div>

          {/* BOTÃO WHATSAPP PRATA RELUZENTE - TIPO NAVBAR COM TEXTO LEVE */}
          <a 
            href="https://wa.me/5583993754000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-full py-5 rounded-2xl font-normal text-[12px] md:text-[14px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 shadow-2xl bg-prata-brilhoso text-[#050C16] animate-[pulse-prata-reluzente_2s_infinite]"
          >
            {/* Camada do Reflexo Prata */}
            <div className="shimmer-layer-contact">
              <div className="shimmer-line-contact"></div>
            </div>
            
            <i className="ri-whatsapp-line text-2xl relative z-10"></i> 
            <span className="relative z-10 font-normal">Iniciar Consulta Online</span>
          </a>
          
          <p className="text-white/60 text-[10px] text-center mt-6 uppercase tracking-widest">
            Resposta imediata via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;