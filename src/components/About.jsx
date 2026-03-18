import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const { ref, inView: sobreVisivel } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mensagemWpp = encodeURIComponent("Olá! Gostaria de agendar uma consulta com um especialista em Direito à Saúde.");

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* ONDA DE TOPO - Usando o azul da Mendoza */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-20">
        <svg className="relative block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,120C300,120,0,0,0,0H1200S900,120,600,120Z" fill="#46738A"></path>
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          {/* BLOCO DE TEXTO */}
          <div className={`w-full md:w-1/2 order-1 transition-all duration-1000 ${sobreVisivel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} text-center md:text-left`}>
            <h4 className="font-sans text-mendoza-blue uppercase tracking-widest text-xs md:text-sm mb-3 font-bold">
              Compromisso com o Paciente
            </h4>
            <h2 className="font-serif text-mendoza-dark text-3xl md:text-5xl mb-6 leading-tight">
              Mendoza Advogados
            </h2>
            <div className="space-y-6 text-gray-700 font-sans leading-relaxed text-sm md:text-lg text-justify px-2 md:px-0">
              <p>
                Com mais de uma década de experiência, a Mendoza Advogados consolidou-se como referência na defesa intransigente do Direito à Saúde. Nossa missão é transformar vidas através de uma atuação técnica e estratégica.
              </p>
              <p>
                Especializados em demandas complexas contra planos de saúde e órgãos públicos, atuamos com agilidade na obtenção de liminares para home care, cirurgias e medicamentos de alto custo, garantindo que a dignidade humana esteja sempre acima da burocracia.
              </p>
            </div>

            {/* BOTÃO DESKTOP: Prata Reluzente conforme conversamos */}
            <div className="hidden md:block mt-10">
              <a 
                href={`https://wa.me/5583993754000?text=${mensagemWpp}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative px-10 py-4 overflow-hidden transition-all duration-300 rounded-full shadow-xl inline-flex items-center justify-center border border-white/30 bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8] group"
              >
                {/* Efeito de brilho sweep animado (Shimmer) */}
                <div className="shimmer-layer">
                  <div className="shimmer-line"></div>
                </div>
                
                <span className="relative z-10 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#050C16]">Falar com Especialista</span>
              </a>
            </div>
          </div>

          {/* CARROSSEL DE FOTOS */}
          <div className={`w-full md:w-1/2 order-2 relative transition-all duration-1000 delay-300 ${sobreVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="absolute -inset-3 md:-inset-4 border border-mendoza-blue/30 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl md:rounded-3xl pointer-events-none"></div>
            
            <div className="relative z-10 shadow-2xl overflow-hidden rounded-2xl md:rounded-3xl" style={{ borderRadius: "18px 18px 18px 0px" }}>
              <Swiper
                modules={[Pagination, Autoplay]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="w-full h-[350px] md:h-[500px] relative"
              >
                {/* Aqui você usará as fotos da Mendoza Advogados */}
                <SwiperSlide><img src="/sobre01.png" className="w-full h-full object-cover" alt="Mendoza Advogados Escritório" /></SwiperSlide>
                <SwiperSlide><img src="/sobre02.png" className="w-full h-full object-cover" alt="Atendimento Especializado" /></SwiperSlide>

                {/* Navegação Customizada */}
                <button 
                  type="button" 
                  onClick={(e) => { e.preventDefault(); if (swiperInstance) swiperInstance.slidePrev(); }} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full border border-white/20 bg-mendoza-dark/50 text-white"
                >
                  <i className="ri-arrow-left-s-line text-2xl"></i>
                </button>
                
                <button 
                  type="button" 
                  onClick={(e) => { e.preventDefault(); if (swiperInstance) swiperInstance.slideNext(); }} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-[100] w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full border border-white/20 bg-mendoza-dark/50 text-white"
                >
                  <i className="ri-arrow-right-s-line text-2xl"></i>
                </button>
              </Swiper>
            </div>
          </div>

          {/* BOTÃO MOBILE */}
          <div className={`w-full md:hidden order-3 flex justify-center mt-8 transition-all duration-1000 ${sobreVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a 
              href={`https://wa.me/5583993754000?text=${mensagemWpp}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative px-10 py-4 overflow-hidden rounded-full shadow-xl bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8] text-[#050C16] text-center"
            >
              <span className="relative z-10 font-sans text-[11px] font-bold uppercase tracking-[0.2em]">Falar com Especialista</span>
            </a>
          </div>

        </div>
      </div>

      <style jsx="true">{`
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
    </section>
  );
};

export default About;