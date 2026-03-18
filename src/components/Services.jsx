import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lógica para detectar quando a seção entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Dispara quando 10% da seção estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const atuacoes = [
    {
      title: "Home Care e Internação",
      description: "Garantia de estrutura hospitalar domiciliar e suporte de enfermagem para pacientes que necessitam de cuidados contínuos.",
      icon: <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h14v-8h3L12 3z" opacity="0.8"/><path d="M21.99 18.5a1.5 1.5 0 0 1-1.49 1.5H3.5a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 1.49 1.5z"/></svg>
    },
    {
      title: "Tratamentos e Medicamentos",
      description: "Ações para fornecimento de medicação de alto custo e terapias específicas negadas pelo plano de saúde ou SUS.",
      icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10 2a2 2 0 0 0-2 2v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2h-4z" fill="currentColor" opacity="0.3"/><path d="M12 12v4M10 14h4"/><path d="M16 22a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2" fill="currentColor"/></svg>
    },
    {
      title: "Isenção de Imposto de Renda",
      description: "Direito garantido por lei para aposentados e pensionistas portadores de doenças graves, mesmo sem sintomas atuais.",
      icon: <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" opacity="0.4"/><path d="M4 10h16v4H4zM4 16h16v2H4z"/><path d="M12 3L2 8h20z"/></svg>
    },
    {
      title: "Direitos dos Autistas",
      description: "Atuação especializada para garantir terapias multidisciplinares (ABA, fonoaudiologia, etc.) e inclusão escolar.",
      icon: <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" fill="currentColor" opacity="0.5"/><path d="M16 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" fill="currentColor"/><path d="M6 12h12"/></svg>
    },
    {
      title: "Cirurgias e Exames",
      description: "Medidas judiciais urgentes para autorização de cirurgias bariátricas, cardíacas e exames diagnósticos complexos.",
      icon: <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" opacity="0.8"/><path d="M4 6l16 12M4 18L20 6" stroke="#000" strokeWidth="1.5"/></svg>
    },
    {
      title: "Reajustes Abusivos",
      description: "Combate a aumentos desproporcionais em mensalidades de planos de saúde por mudança de faixa etária ou sinistralidade.",
      icon: <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /><path d="M4 14l8-8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/></svg>
    }
  ];

  const whatsappUrl = "https://wa.me/5583993754000";

  return (
    <section 
      id="atuacao" 
      ref={sectionRef}
      className="py-24 bg-cover bg-center overflow-hidden relative font-['Inter']"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay mais leve (60%) para clarear a sessão */}
      <div className="absolute inset-0 bg-[#050C16]/60 z-0"></div>
      
      <style jsx="true">{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          opacity: 0; /* Começa invisível */
        }
        .reveal .animate-card {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className={`max-w-7xl mx-auto px-6 relative z-10 ${isVisible ? 'reveal' : ''}`}>
        
        {/* CABEÇALHO */}
        <div className="text-center mb-20 animate-card" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-[11px] font-bold text-[#cbd5e1] uppercase tracking-[0.4em] mb-4">
            Especialidades
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
            Nossas Áreas de Atuação
          </h3>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atuacoes.map((item, index) => (
            <div 
              key={index} 
              className="animate-card group relative w-full p-10 rounded-[2.5rem] bg-white/[0.08] backdrop-blur-[25px] border border-white/30 shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-700 flex flex-col items-start overflow-hidden"
              // Delay incremental para cada card
              style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
            >
              {/* Reflexo de luz diagonal no card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-transparent to-transparent pointer-events-none"></div>
              
              {/* Brilho Bisotê */}
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] pointer-events-none"></div>

              {/* ÍCONE ÚNICO */}
              <div className="absolute top-10 right-10 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] opacity-90 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-6">
                {item.icon}
              </div>

              {/* ESPAÇAMENTO */}
              <div className="h-14 w-full mb-2"></div>
              
              {/* TÍTULO */}
              <h4 className="text-[24px] font-bold text-white mb-5 tracking-tight pr-10 leading-[1.2]">
                {item.title}
              </h4>
              
              {/* DESCRIÇÃO */}
              <p className="text-slate-100 font-light text-[15px] leading-relaxed mb-12 tracking-wide">
                {item.description}
              </p>
              
              {/* LINK WHATSAPP */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center text-white text-[12px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:tracking-[0.4em]"
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