import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Fundo muda para a cor solicitada (#46738A) quando rola a página
    <nav className={`font-['Inter'] w-full fixed top-0 z-50 transition-all duration-300 antialiased ${
      isScrolled ? 'bg-[#46738A] shadow-md' : 'bg-transparent'
    }`}>
      
      {/* Main Navbar */}
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}>
        
        {/* ESQUERDA: Logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img 
            src="/logo.png" 
            alt="Mendoza Advogados" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* DIREITA: Grupo com Links e Botão */}
        <div className="hidden md:flex items-center gap-8 shrink-0">
          
          {/* Links de Navegação */}
          <div className="flex gap-6 font-normal whitespace-nowrap text-white transition-colors duration-300">
            <a href="#inicio" className="hover:opacity-75 transition-opacity">Início</a>
            <a href="#sobre" className="hover:opacity-75 transition-opacity">Sobre</a>
            <a href="#atuacao" className="hover:opacity-75 transition-opacity">Áreas de Atuação</a>
            <a href="#faq" className="hover:opacity-75 transition-opacity">FAQ</a>
            <a href="#contato" className="hover:opacity-75 transition-opacity">Contato</a>
          </div>

          {/* CTA Button Metálico Brilhoso (Sem maiúsculas) */}
          <a 
            href="https://wa.me/5583993754000" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2.5 rounded-md font-semibold whitespace-nowrap transition-all duration-300 text-sm md:text-base text-white drop-shadow-md bg-gradient-to-b from-[#8ab6cc] via-[#46738A] to-[#1e3440] border border-[#385b6e] border-t-[#a8c9d9] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_4px_15px_rgba(70,115,138,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_6px_20px_rgba(70,115,138,0.7)] hover:brightness-110 hover:-translate-y-0.5"
          >
            Agende Consulta Jurídica
          </a>
          
        </div>

        {/* DIREITA: Mobile Menu Icon */}
        <div className="md:hidden text-2xl shrink-0 text-white transition-colors duration-300">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;