import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const depoimentos = [
    { 
      nome: "Fátima R.", 
      cargo: "Aposentada", 
      texto: "Graças ao Mendoza Advogados, consegui a liberação do meu Home Care. Fui cuidada com amor e dignidade no conforto do meu lar." 
    },
    { 
      nome: "Marcos V.", 
      cargo: "Pai de paciente", 
      texto: "A equipe garantiu que meu filho tivesse acesso a todas as terapias indicadas. Hoje ele tem a evolução que sempre sonhamos." 
    },
    { 
      nome: "Antônio P.", 
      cargo: "Servidor Federal", 
      texto: "Consegui a isenção do Imposto de Renda por doença grave de forma rápida e ética. Profissionais que dominam o assunto." 
    },
    { 
      nome: "Júlia S.", 
      cargo: "Professora", 
      texto: "Lutaram pela minha medicação de alto custo quando o plano negou. Eles foram a minha voz no momento que eu mais precisei." 
    },
    { 
      nome: "Ricardo L.", 
      cargo: "Empresário", 
      texto: "O atendimento on-line facilitou tudo. Me senti totalmente amparado pela equipe, mesmo estando em outro estado." 
    },
    { 
      nome: "Beatriz M.", 
      cargo: "Pensionista", 
      texto: "Transparência e agilidade definem o trabalho. Conseguiram reverter o reajuste abusivo do meu plano de saúde com maestria." 
    }
  ];

  return (
    <section 
      id="depoimentos" 
      className="py-16 md:py-24 relative overflow-hidden group bg-[#F8FAFC]"
    >
      
      {/* PONTINHOS FLUTUANTES */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="particles-container">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
            <span className="dot dot-5"></span>
            <span className="dot dot-6"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* CABEÇALHO COM ANIMAÇÃO DE ENTRADA */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h4 className="text-[#46738A] uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 font-bold font-sans">
            Reconhecimento
          </h4>
          <h2 className="text-[#050C16] font-serif text-3xl md:text-5xl mb-8 leading-tight tracking-tight">
            Vitórias que Transformam Vidas
          </h2>
          
          {/* ESTRELAS OURO CINTILANTES */}
          <div className="flex justify-center gap-1.5 text-xl md:text-2xl pt-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className="ri-star-fill gold-star"
              ></i>
            ))}
          </div>
        </div>

        <div className={`relative px-4 md:px-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true, 
              el: '.swiper-pagination-custom' 
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="sobre-swiper !pb-12"
          >
            {depoimentos.map((depo, index) => (
              <SwiperSlide key={index} className="!h-auto flex py-4">
                <div className="relative w-full flex flex-col p-8 rounded-3xl overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-xl bg-white/70 border border-white hover:border-[#D4AF37]/30 group/card">
                  
                  <div className="absolute inset-0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"></div>

                  <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,1)] pointer-events-none"></div>
                  
                  <i className="ri-double-quotes-l absolute top-6 right-8 text-[#050C16]/5 text-5xl z-0"></i>

                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-11 h-11 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] bg-white shadow-sm">
                      <i className="ri-user-3-fill text-xl"></i>
                    </div>
                    <div className="text-left">
                      <span className="block text-[#050C16] font-bold text-[13px] tracking-wider uppercase font-sans">{depo.nome}</span>
                      <span className="block text-[#46738A]/60 text-[10px] uppercase tracking-widest font-medium mt-0.5">{depo.cargo}</span>
                    </div>
                  </div>

                  <p className="text-[#334155] font-light leading-relaxed text-[15px] md:text-[16px] italic text-left flex-grow font-serif relative z-10">
                    "{depo.texto}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-[#050C16]/5 bg-white text-[#050C16] shadow-lg hover:bg-[#050C16] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button className="swiper-button-next-custom absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-[#050C16]/5 bg-white text-[#050C16] shadow-lg hover:bg-[#050C16] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>

        <div className="swiper-pagination-custom flex justify-center gap-3 mt-6"></div>
      </div>

      <style jsx="true">{`
        /* ESTRELAS OURO CINTILANTES */
        .gold-star {
          background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(184, 134, 11, 0.2));
          animation: shine 3s infinite linear;
          background-size: 200% auto;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        /* PONTINHOS */
        .particles-container { width: 100%; height: 100%; position: relative; }
        .dot {
            position: absolute;
            background: #D4AF37;
            border-radius: 50%;
            opacity: 0.3;
            animation: float 20s infinite linear;
        }
        .dot-1 { width: 4px; height: 4px; top: 10%; left: 10%; animation-duration: 15s; }
        .dot-2 { width: 6px; height: 6px; top: 80%; left: 20%; animation-duration: 25s; }
        .dot-3 { width: 3px; height: 3px; top: 40%; left: 80%; animation-duration: 18s; }
        .dot-4 { width: 5px; height: 5px; top: 20%; left: 50%; animation-duration: 22s; }
        .dot-5 { width: 4px; height: 4px; top: 70%; left: 90%; animation-duration: 20s; }
        .dot-6 { width: 2px; height: 2px; top: 50%; left: 5%; animation-duration: 12s; }

        @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-40px) translateX(20px); }
            100% { transform: translateY(0) translateX(0); }
        }

        .swiper-pagination-custom :global(.swiper-pagination-bullet) {
          background: rgba(5, 12, 22, 0.1);
          opacity: 1;
          width: 6px;
          height: 6px;
          transition: all 0.3s;
        }
        .swiper-pagination-custom :global(.swiper-pagination-bullet-active) {
          background: #D4AF37;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;