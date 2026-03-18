import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050C16] overflow-hidden flex items-center pt-20 md:pt-0 font-sans">
      
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

        /* ANIMAÇÃO DOS PONTINHOS FLUTUANTES */
        .dot-hero {
            position: absolute;
            background: #ffffff;
            border-radius: 50%;
            opacity: 0.15;
            filter: blur(1px);
            animation: floatHero 15s infinite ease-in-out;
            pointer-events: none; 
        }
        @keyframes floatHero {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.1; }
            50% { transform: translateY(-60px) translateX(30px) scale(1.2); opacity: 0.3; }
            100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.1; }
        }
      `}</style>

      {/* Camada 0: Imagem de fundo ajustada para o limite direito */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-[95%_center] md:bg-right-top z-0"></div>
      
      {/* Camada 1: PONTINHOS FLUTUANTES */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="relative w-full h-full overflow-hidden">
          <span className="dot-hero w-1 h-1 top-[20%] left-[15%]" style={{ animationDelay: '0s' }}></span>
          <span className="dot-hero w-2 h-2 top-[60%] left-[25%]" style={{ animationDelay: '2.5s' }}></span>
          <span className="dot-hero w-1 h-1 top-[40%] left-[80%]" style={{ animationDelay: '4s' }}></span>
          <span className="dot-hero w-1.5 h-1.5 top-[80%] left-[45%]" style={{ animationDelay: '1.2s' }}></span>
          <span className="dot-hero w-1 h-1 top-[15%] left-[65%]" style={{ animationDelay: '3s' }}></span>
          <span className="dot-hero w-2 h-2 top-[70%] left-[85%]" style={{ animationDelay: '5.5s' }}></span>
          <span className="dot-hero w-1.5 h-1.5 top-[30%] left-[35%]" style={{ animationDelay: '0.8s' }}></span>
        </div>
      </div>
      
      {/* Overlay mobile reforçado */}
      <div className="absolute inset-0 bg-black/50 md:bg-transparent z-10"></div>

      {/* Camada 2: Conteúdo */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUNA ESQUERDA: mt-24 no mobile e mt-40 no desktop para descer o conteúdo */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 mt-24 lg:mt-40">
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-2xl">
            Transformando Vidas<br />
            e garantindo o<br />
            direito à saúde
          </h1>
          
          <p className="text-sm md:text-lg text-gray-100 max-w-lg leading-relaxed font-light drop-shadow-lg">
            Há mais de 10 anos, a Mendoza Advogados atua na proteção intransigente dos direitos e garantias de seus clientes.
          </p>
          
          <div className="w-full flex flex-col items-center lg:items-start gap-4 mt-4">
             <a 
               href="https://wa.me/5583993754000" 
               target="_blank"
               rel="noreferrer"
               className="relative px-10 py-4 rounded-full font-normal uppercase tracking-widest text-[12px] text-[#050C16] bg-prata-brilhoso shadow-2xl flex items-center justify-center w-full sm:w-auto hover:brightness-105 transition-all duration-300 animate-[pulse-prata-reluzente_2s_infinite]"
             >
               <div className="shimmer-layer"><div className="shimmer-line"></div></div>
               <span className="relative z-10">Falar com Advogado</span>
             </a>
          </div>
        </div>

        <div className="hidden lg:flex relative w-full h-[650px] items-end justify-center">
        </div>
      </div>
    </section>
  );
};

export default Hero;