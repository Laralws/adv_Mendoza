import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const atuacoes = [
    { title: "Home Care e Internação", description: "Garantia de estrutura hospitalar domiciliar e suporte de enfermagem para pacientes que necessitam de cuidados contínuos.", imgSrc: "/6.png" },
    { title: "Tratamentos e Medicamentos", description: "Ações para fornecimento de medicação de alto custo e terapias específicas negadas pelo plano de saúde ou SUS.", imgSrc: "/7.png" },
    { title: "Isenção de Imposto de Renda", description: "Direito garantido por lei para aposentados e pensionistas portadores de doenças graves, mesmo sem sintomas atuais.", imgSrc: "/3.png" },
    { title: "Direitos dos Autistas", description: "Atuação especializada para garantir terapias multidisciplinares (ABA, fonoaudiologia, etc.) e inclusão escolar.", imgSrc: "/5.png" },
    { title: "Cirurgias e Exames", description: "Medidas judiciais urgentes para autorização de cirurgias e exames diagnósticos complexos.", imgSrc: "/4.png" },
    { title: "Reajustes Abusivos", description: "Combate a aumentos desproporcionais em mensalidades de planos de saúde por mudança de faixa etária ou sinistralidade.", imgSrc: "/2.png" }
  ];

  const whatsappUrl = "https://wa.me/5583993754000";

  return (
    <section 
      id="atuacao" 
      ref={sectionRef}
      className="py-20 md:py-24 bg-cover bg-center overflow-hidden relative font-['Inter']"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#050C16]/60 z-0"></div>
      
      <style jsx="true">{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card { opacity: 0; }
        .reveal .animate-card {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className={`max-w-7xl mx-auto px-6 relative z-10 ${isVisible ? 'reveal' : ''}`}>
        
        <div className="text-center mb-16 md:mb-20 animate-card" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-[10px] md:text-[11px] font-bold text-[#cbd5e1] uppercase tracking-[0.4em] mb-4">
            Especialidades
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
            Nossas Áreas de Atuação
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {atuacoes.map((item, index) => (
            <div 
              key={index} 
              className="animate-card group relative w-full p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.08] backdrop-blur-[25px] border border-white/30 shadow-2xl hover:-translate-y-4 transition-all duration-700 flex flex-col items-start overflow-hidden"
              style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
            >
              {/* Reflexos e Brilhos */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] pointer-events-none"></div>

              {/* ÍCONES REAJUSTADOS PARA NÃO COLAR NA EXTREMIDADE NO MOBILE */}
              {/* No mobile: top-4 right-4 (mais para dentro) | No desktop: md:top-6 md:right-6 */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-90 transition-transform duration-700 group-hover:scale-110 z-30">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]" 
                />
              </div>

              {/* Espaçador equilibrado para acomodar a imagem sem cobrir o texto */}
              <div className="h-16 md:h-24 w-full mb-2"></div>
              
              <h4 className="text-[20px] md:text-[22px] font-bold text-white mb-4 md:mb-5 tracking-tight pr-12 leading-[1.2] relative z-20">
                {item.title}
              </h4>
              
              <p className="text-slate-100 font-light text-[13px] md:text-[14px] leading-relaxed mb-8 md:mb-12 tracking-wide relative z-20">
                {item.description}
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center text-white text-[11px] md:text-[12px] font-normal uppercase tracking-[0.3em] transition-all duration-300 hover:tracking-[0.4em] relative z-20"
              >
                Saiba Mais
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;