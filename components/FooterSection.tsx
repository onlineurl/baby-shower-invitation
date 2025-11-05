import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#e0c8e7] relative overflow-hidden">
      <div className="sparkle-overlay"></div>
      <p className="relative z-10 text-center text-5xl text-[#8b3c8f] font-dancing drop-shadow-lg">
        ¡Te esperamos con mucha ilusión para celebrar juntos!
      </p>
    </section>
  );
};

export default FooterSection;