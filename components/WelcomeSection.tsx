import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center bg-[#fdf5f6]">
      <h2 className="font-dancing text-4xl md:text-5xl text-[#a0529d] mb-4">
        Una dulce sorpresa está en camino
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-[#666]">
        Todavía no podemos revelar su nombre, pero pero pero... ¡te esperamos para que lo descubras junto a nosotros!
      </p>
    </section>
  );
};

export default WelcomeSection;