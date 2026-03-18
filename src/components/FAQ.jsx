import React, { useState } from 'react';

const FAQ = () => {
  const [faqAberto, setFaqAberto] = useState(null);

  // Paleta unificada Mendoza
  const coresEstatua = {
    azulGrafite: '#0A111A', // Tom denso para os títulos
    prataAco: '#46738A',    // Tom azulado metálico da marca
    cinzaFundo: '#F8FAFC',  // Fundo muito claro e limpo
    branco: '#FFFFFF'
  };

  const faqs = [
    {
      pergunta: "O plano de saúde negou meu tratamento. O que fazer?",
      resposta: "Nesses casos, atuamos com pedidos de liminar (decisões urgentes). O judiciário costuma entender que a saúde não pode esperar o fim de um processo longo."
    },
    {
      pergunta: "Como funciona a isenção de Imposto de Renda para doenças graves?",
      resposta: "Aposentados e pensionistas diagnosticados com doenças previstas em lei têm direito à isenção total. Podemos ajudar a reaver inclusive os valores pagos nos últimos 5 anos."
    },
    {
      pergunta: "Moro em outro estado. Posso ser atendido por vocês?",
      resposta: "Com certeza. Somos um escritório 100% digital e atendemos clientes em todo o Brasil através de videoconferências e processos eletrônicos com total segurança."
    },
    {
      pergunta: "O escritório atua na liberação de Home Care?",
      resposta: "Sim. Se houver indicação médica para internação domiciliar e o plano ou SUS negar, entramos com as medidas judiciais para garantir a estrutura necessária na sua casa."
    },
    {
      pergunta: "Quais são os documentos necessários para análise?",
      resposta: "Geralmente pedimos o laudo médico detalhado, a negativa por escrito (se houver) e documentos pessoais. Nossa equipe enviará um checklist específico para o seu caso."
    }
  ];

  const toggleFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: coresEstatua.cinzaFundo }}>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h4 style={{ color: coresEstatua.prataAco }} className="font-sans uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-2 md:mb-3 font-bold">
            Dúvidas Frequentes
          </h4>
          <h2 style={{ color: coresEstatua.azulGrafite }} className="font-serif text-2xl md:text-4xl">
            Perguntas Respondidas
          </h2>
          <div className="w-16 h-[1px] bg-slate-300 mx-auto mt-6"></div>
        </div>

        <div className="space-y-1 md:space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 pb-2">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group gap-4"
              >
                <span className={`font-serif text-[14px] md:text-lg tracking-wide transition-colors pr-2 ${faqAberto === index ? 'text-[#46738A] font-bold' : 'text-[#0A111A] group-hover:text-slate-500'}`}>
                  {faq.pergunta}
                </span>
                
                {/* ÍCONE CIRCULAR EM AÇO MENDOZA */}
                <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border transition-all duration-300 ${faqAberto === index ? 'bg-[#46738A] border-[#46738A] text-white rotate-45' : 'border-slate-300 text-slate-400 group-hover:border-[#46738A] group-hover:text-[#46738A]'}`}>
                  <i className="ri-add-line text-sm md:text-base"></i>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${faqAberto === index ? 'max-h-60 opacity-100 pb-4 md:pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 font-light text-[13px] md:text-base leading-relaxed pr-4 md:pr-8 border-l-2 border-[#46738A] pl-4 ml-1">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;