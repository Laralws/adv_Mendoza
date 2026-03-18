import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden font-['Inter']">
      
      {/* Marca d'água sutil */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-64 md:w-96 text-mendoza-dark select-none transform -translate-y-1/4 translate-x-1/4">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M10,100 L40,40 L70,100 Z" />
          <path d="M70,100 L100,40 L130,100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LADO ESQUERDO: Espaço para Carrossel de Fotos */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 aspect-[4/3] flex items-center justify-center border-8 border-white">
              <div className="text-gray-400 font-medium italic text-center px-6">
                Espaço reservado para o Carrossel de Fotos
              </div>
              
              <div className="absolute top-4 left-4 py-1 px-3 bg-[#46738A] text-white text-xs font-bold rounded-full z-20 shadow-lg">
                Mendoza Advogados
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Títulos e Cards Transparentes */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-[10px] md:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
                Quem Somos
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0A111A] leading-tight">
                Conheça o propósito da <br className="hidden md:block" />
                Mendoza Advogados.
              </h3>
            </div>
            
            {/* GRID DE CARDS TRANSPARENTES (Mantendo o estilo que você gostou) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#46738A]/10 flex items-center justify-center text-[#46738A] group-hover:bg-[#46738A] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h4 className="font-bold text-[#0A111A] text-sm leading-snug">Sócios Mestres e Especialistas experientes</h4>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#46738A]/10 flex items-center justify-center text-[#46738A] group-hover:bg-[#46738A] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="font-bold text-[#0A111A] text-sm leading-snug">Defesa Especializada na Causa do Autismo</h4>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#46738A]/10 flex items-center justify-center text-[#46738A] group-hover:bg-[#46738A] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h4 className="font-bold text-[#0A111A] text-sm leading-snug">Especialistas em Direito à Saúde e Isenções</h4>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#46738A]/10 flex items-center justify-center text-[#46738A] group-hover:bg-[#46738A] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"></path></svg>
                </div>
                <h4 className="font-bold text-[#0A111A] text-sm leading-snug">Atendimento Jurídico em todo o Brasil</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;