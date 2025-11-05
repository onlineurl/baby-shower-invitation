import React, { useState } from 'react';

const staticSuggestions = [
    "Kits de Pañales y toallitas para sus distintas etapas.",
    "Ropita de bebé (¡los talles para después de los 3 meses son una gran idea!).",
    "Gift Cards / Nota de crédito de tiendas para bebés.",
    "Un sobrecito con efectivo para los futuros papás.",
    "Un set de baño para bebé (toalla con capucha, jabón neutro, esponjita).",
    "Juguetes sensoriales o un gimnasio para bebé.",
    "Canasta o Kit de Artículos de Higiene que siempre usarán"
    "Un Iphone 17 Pro Max es un excelente regalo! (IA: Me parece que el padre estuvo jugando con estas sugerencias) ",
    "Libros de cuentos para leerle antes de dormir.",
    "Un set de alimentación (biberones, platitos, cubiertos).",
];

const GiftSuggestionsSection: React.FC = () => {
    const [currentSuggestion, setCurrentSuggestion] = useState<string | null>(null);

    const generateRandomSuggestion = () => {
        let newSuggestion: string;
        // Simple logic to avoid showing the same suggestion twice in a row
        do {
            const randomIndex = Math.floor(Math.random() * staticSuggestions.length);
            newSuggestion = staticSuggestions[randomIndex];
        } while (currentSuggestion === newSuggestion && staticSuggestions.length > 1);
        
        setCurrentSuggestion(newSuggestion);
    };

    return (
        <section className="py-12 px-6 text-center bg-[#f2e6f7]">
            <h2 className="font-dancing text-3xl md:text-4xl text-[#a0529d] mb-3">
              
            </h2>
            <p className="max-w-3xl mx-auto text-base text-[#666] mb-8">
                Tu presencia es el mejor regalo, pero si deseas traer un detalle, ¡aquí puedes generar una idea al azar!
            </p>

            <div className="max-w-md mx-auto">
                <div className="bg-white/70 p-6 rounded-lg shadow-inner min-h-[100px] flex items-center justify-center mb-6 transition-all duration-300">
                    {currentSuggestion ? (
                        <p key={currentSuggestion} className="text-gray-700 text-lg animate-fade-in-up">
                            <span className="text-[#d195d4] mr-2">♡</span>{currentSuggestion}
                        </p>
                    ) : (
                        <p className="text-gray-500">Haz clic en el botón para una idea...</p>
                    )}
                </div>

                <button
                    onClick={generateRandomSuggestion}
                    className="bg-[#b062b3] text-white py-3 px-8 rounded-full font-bold text-base shadow-lg transition-all duration-300 ease-in-out hover:bg-[#8e4a91] hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d195d4]"
                >
                    Generar idea al azar
                </button>
            </div>
        </section>
    );
};

export default GiftSuggestionsSection;