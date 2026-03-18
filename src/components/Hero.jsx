import React from 'react';

const Hero = () => {
  return (
    // Fundo escuro da Mendoza para as margens, mas a imagem cobrirá tudo.
    <section className="relative w-full min-h-screen bg-mendoza-dark overflow-hidden flex items-center pt-24 md:pt-0">
      
      {/* Imagem de fundo bruta, nítida e sem camadas (carregando /hero.png) */}
      <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUNA ESQUERDA: Textos e Botão */}
        {/* Adicionado mt-24 md:mt-40 para empurrar o bloco de texto para baixo */}
        <div className="flex flex-col items-start gap-6 mt-24 lg:mt-40">
          
          {/* Título: Usando font-serif para dar aquele ar clássico da referência */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
            Mendoza Advogados,<br />
            Defesa Estratégica com<br />
            Excelência e Discrição.
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed font-light">
            Há mais de 10 anos, a Mendoza Advogados atua na proteção intransigente dos direitos e garantias de seus clientes. Especialistas em casos complexos e sensíveis, oferecemos uma defesa técnica, combativa e personalizada do inquérito aos tribunais superiores.
          </p>
          
          <div className="w-full flex flex-col items-start gap-4 mt-4">
             {/* Botão Metálico Azulado com Texto Branco */}
             <a 
               href="https://wa.me/5583993754000" 
               target="_blank"
               rel="noreferrer"
               className="px-10 py-4 rounded-md font-bold transition-all duration-300 uppercase tracking-widest text-sm text-white drop-shadow-md bg-gradient-to-b from-[#5c8a9f] via-[#46738A] to-[#2a4857] border border-[#7ba2b5] shadow-[0_4px_15px_rgba(70,115,138,0.5)] hover:shadow-[0_6px_20px_rgba(70,115,138,0.7)] hover:brightness-110 w-full sm:w-auto text-center"
             >
               Agende Consulta Jurídica
             </a>
             
          </div>
        </div>

        {/* COLUNA DIREITA: Composição de Imagens */}
        <div className="relative w-full h-[450px] lg:h-[650px] flex items-end justify-center mt-10 lg:mt-0">
           
           {/* Todos os elementos quebrados (Símbolo e Selo) foram completamente removidos daqui. */}
           {/* Agora esta coluna está vazia, servindo apenas para manter o layout do Grid e não deixar o texto invadir o rosto dos advogados. */}

        </div>
      </div>
    </section>
  );
};

export default Hero;