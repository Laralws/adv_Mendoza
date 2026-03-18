import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ cores }) => {
  const depoimentos = [
    { 
      nome: "Fátima R.", 
      cargo: "Aposentada", 
      texto: "Graças ao Mendoza Advogados, consegui a liberação do meu Home Care. Fui cuidada com amor e dignidade no conforto do meu lar." 
    },
    { 
      nome: "Marcos V.", 
      cargo: "Pai", 
      texto: "A equipe garantiu que meu filho tivesse acesso a todas as terapias indicadas. Hoje ele tem a evolução que sempre sonhamos." 
    },
    { 
      nome: "Antônio P.", 
      cargo: "Servidor Federal Aposentado", 
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
      texto: "O atendimento on-line facilitou tudo. Mesmo estando em outro estado, me senti totalmente amparado pela Melanie e pelo Gustavo." 
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
      className="py-16 md:py-24 relative overflow-hidden group" 
      style={{ backgroundColor: cores.azulNoite }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20">
          <h4 style={{ color: cores.cinzaExecutivo }} className="font-serif-lux uppercase tracking-[0.3em] text-[10px] mb-2">
            Reconhecimento
          </h4>
          <h2 className="text-white font-serif-lux text-3xl md:text-4xl mb-6 leading-tight">
            Vitorias que Transformam Vidas
          </h2>
          
          <div className="flex justify-center gap-2 text-xl md:text-2xl pt-2">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className="ri-star-fill bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" 
                style={{ 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(135deg, #2d3a4d 0%, #7a8c9f 30%, #ffffff 50%, #7a8c9f 70%, #2d3a4d 100%)',
                  filter: 'contrast(1.2) brightness(1.1)'
                }} 
              ></i>
            ))}
          </div>
        </div>

        <div className="relative px-8 md:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            className="sobre-swiper"
          >
            {depoimentos.map((depo, index) => (
              <SwiperSlide key={index} className="!h-auto flex py-4">
                <div className="bg-white/[0.08] backdrop-blur-lg border border-white/10 p-8 rounded-2xl w-full flex flex-col group/card hover:bg-white/[0.12] transition-all duration-500 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 bg-white/5">
                      <i className="ri-user-line text-2xl"></i>
                    </div>
                    <div className="text-left">
                      <span className="block text-white font-bold text-xs tracking-widest uppercase font-serif-lux">{depo.nome}</span>
                      <span style={{ color: cores.cinzaExecutivo }} className="block text-[10px] uppercase font-sans-lux">{depo.cargo}</span>
                    </div>
                  </div>
                  <p className="text-gray-100 font-sans-lux leading-relaxed text-[15px] italic text-left flex-grow opacity-90">
                    "{depo.texto}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-azulNoite transition-all duration-300 md:-left-4 opacity-0 group-hover:opacity-100">
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white hover:text-azulNoite transition-all duration-300 md:-right-4 opacity-0 group-hover:opacity-100">
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
        </div>

        <div className="swiper-pagination-custom flex justify-center gap-3 mt-10"></div>
      </div>

      <style jsx="true">{`
        .swiper-pagination-custom :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-custom :global(.swiper-pagination-bullet-active) {
          background: #FFFFFF;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;