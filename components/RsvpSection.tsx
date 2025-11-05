import React from 'react';

const RsvpSection: React.FC = () => {
    const whatsappNumber = "+5492634947811"; // Reemplazar con el número real
    const message = "¡Hola! Confirmo mi asistencia! Somos ____ personas ¡Nos vemos allí!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    return (
    <section className="py-16 px-6 text-center bg-gradient-to-b from-[#e0c8e7] to-[#f7e6f8]">
      <h2 className="font-dancing text-4xl md:text-5xl text-[#a0529d] mb-6">
        Confirma tu Asistencia
      </h2>
      <p className="text-lg font-bold text-[#8b3c8f] animate-pulse-scale mb-8">
        Por favor, confirma antes del 17 de Noviembre.
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#b062b3] text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#8e4a91] hover:transform hover:-translate-y-1"
      >
        <i className="fab fa-whatsapp mr-2"></i>
        Confirmar por WhatsApp
      </a>
    </section>
  );
};

export default RsvpSection;