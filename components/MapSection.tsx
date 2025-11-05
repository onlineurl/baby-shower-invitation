import React from 'react';

const MapSection: React.FC = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2363.5842502132405!2d-68.47527789458913!3d-33.09296717363219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-33.0936379!2d-68.4747488!5e0!3m2!1ses!2sar!4v1762284195128!5m2!1ses!2sar";

    return (
    <section className="py-16 px-6 text-center bg-[#fdf5f6]">
      <h2 className="font-dancing text-4xl md:text-5xl text-[#a0529d] mb-6">
        ¿Cómo llegar?
      </h2>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-4 border-white">
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Ubicación del Evento"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href="https://maps.app.goo.gl/PHrUCUQ7QRvzKRwY6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-[#b062b3] font-bold border-b-2 border-[#b062b3] pb-1 transition-colors duration-300 hover:text-[#8e4a91] hover:border-[#8e4a91]"
      >
        Abrir en Google Maps
      </a>
    </section>
  );
};

export default MapSection;