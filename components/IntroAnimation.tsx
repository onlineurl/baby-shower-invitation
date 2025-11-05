
import React, { useState, useEffect } from 'react';

declare let confetti: any;

interface IntroAnimationProps {
    isVisible: boolean;
    onEnter: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ isVisible, onEnter }) => {
    const [isFading, setIsFading] = useState(false);
    const [isDestroyed, setIsDestroyed] = useState(false);
    
    useEffect(() => {
        // Cuando la prop isVisible cambia a false, iniciamos el fundido de salida.
        if (!isVisible) {
            setIsFading(true);
            // Esperamos que la animación CSS termine antes de desmontar el componente.
            const timer = setTimeout(() => {
                setIsDestroyed(true);
            }, 1000); // Coincide con la duración de la transición en CSS.
            return () => clearTimeout(timer);
        }
    }, [isVisible]);


    const handleInteraction = () => {
        // --- Animación de Confeti Visual ---
        if (typeof confetti === 'function') {
            const duration = 2 * 1000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#d195d4', '#f2e6f7', '#a0529d', '#ffffff']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#d195d4', '#f2e6f7', '#a0529d', '#ffffff']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }

        // Llama a la función del padre para manejar la lógica de audio y estado.
        onEnter();
    };

    if (isDestroyed) {
        return null;
    }

    return (
        <div 
             className={`fixed inset-0 bg-[#f8f0f9] flex items-center justify-center z-50 transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div 
                className="text-center cursor-pointer p-8" 
                onClick={handleInteraction}
                role="button"
                tabIndex={0}
                aria-label="Entrar a la invitación"
            >
                <h1 className="font-dancing text-[#a0529d] text-6xl md:text-8xl animate-pulse-scale drop-shadow-[0_2px_2px_rgba(255,255,255,0.7)]">
                    ¡Estás invitado!
                </h1>
                <p className="mt-4 text-xl text-[#a0529d] opacity-80 font-semibold animate-pulse">
                    Toca para entrar
                </p>
            </div>
        </div>
    );
};

export default IntroAnimation;