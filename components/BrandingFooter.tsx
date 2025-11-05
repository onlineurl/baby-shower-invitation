import React from 'react';

const BrandingFooter: React.FC = () => {
  return (
    <footer className="relative z-20 bg-black text-gray-300 py-5 px-6 text-center text-xs sm:text-sm">
      <p className="mb-2 font-light">
        Invitación digital creada por <strong className="font-semibold text-white">EspacioCreativo</strong>
      </p>
      <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
        <a 
          href="https://wa.me/5492634618494" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:text-white transition-colors duration-300"
        >
          <i className="fab fa-whatsapp text-lg mr-2"></i> <span>263 461 8494</span>
        </a>
        <span className="text-gray-500 hidden sm:inline">|</span>
        <a 
          href="https://www.instagram.com/UnEspaciooo" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:text-white transition-colors duration-300"
        >
          <i className="fab fa-instagram text-lg mr-2"></i> <span>UnEspaciooo</span>
        </a>
      </div>
    </footer>
  );
};

export default BrandingFooter;