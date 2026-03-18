import React from 'react';

const Services = () => {
  const atuacoes = [
    {
      title: "Home Care e Internação",
      description: "Garantia de estrutura hospitalar domiciliar e suporte de enfermagem para pacientes que necessitam de cuidados contínuos.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
    },
    {
      title: "Tratamentos e Medicamentos",
      description: "Ações para fornecimento de medicação de alto custo e terapias específicas negadas pelo plano de saúde ou SUS.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
    },
    {
      title: "Isenção de Imposto de Renda",
      description: "Direito garantido por lei para aposentados e pensionistas portadores de doenças graves, mesmo sem sintomas atuais.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      title: "Direitos dos Autistas",
      description: "Atuação especializada para garantir terapias multidisciplinares (ABA, fonoaudiologia, etc.) e inclusão escolar.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
    },
    {
      title: "Cirurgias e Exames",
      description: "Medidas judiciais urgentes para autorização de cirurgias bariátricas, cardíacas e exames diagnósticos complexos.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
    },
    {
      title: "Reajustes Abusivos",
      description: "Combate a aumentos desproporcionais em mensalidades de planos de saúde por mudança de faixa etária ou sinistralidade.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    }
  ];

  return (
    <section id="atuacao" className="py-24 bg-[#f8fafc] overflow-hidden font-['Inter'] relative">
      
      {/* CÍRCULOS DE LUZ DE FUNDO: Essenciais para realçar o efeito de vidro */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-[#46738A]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-[10px] md:text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-4">
            Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#0A111A]">
            Nossas Áreas de Atuação
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atuacoes.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 relative rounded-3xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* CAMADA DE FUNDO DOS CARDS: Vidro jateado real */}
              {/* bg-white/40 e backdrop-blur-md criam o efeito de vidro */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl border border-white/80 shadow-[0_8px_32px_0_rgba(70,115,138,0.1)] transition-all duration-500 group-hover:bg-white/60 group-hover:shadow-[0_20px_40px_rgba(70,115,138,0.15)]"></div>

              {/* CONTEÚDO (em cima do vidro) */}
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[#46738A]/10 flex items-center justify-center text-[#46738A] group-hover:bg-[#46738A] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0A111A] mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex items-center text-[#46738A] text-[10px] font-bold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Saiba mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;