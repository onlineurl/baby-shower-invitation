import React from 'react';

interface DetailItemProps {
  icon: string;
  text: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, text }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
    <i className={`${icon} text-4xl text-[#d195d4] w-12`}></i>
    <div className="text-lg text-[#666]">{text}</div>
  </div>
);

const DetailsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-[#f2e6f7]">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        <DetailItem 
            icon="fas fa-calendar-alt" 
            text={
                <div className="leading-tight">
                    <p>Domingo,</p>
                    <p className="font-semibold">7 de Diciembre</p>
                    <p>2025</p>
                </div>
            }
        />
        <DetailItem icon="fas fa-clock" text="17:00hs" />
        <DetailItem 
            icon="fas fa-map-marker-alt" 
            text={
                <div className="leading-tight">
                    <p>Salón</p>
                    <p className="font-semibold">Zia Arola</p>
                    <p>Valparaiso 114 (Junín)</p>
                </div>
            } 
        />
      </div>
    </section>
  );
};

export default DetailsSection;