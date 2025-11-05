import React, { useState, useEffect } from 'react';

const ParallaxBackground: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-wrapper');
        if (!scrollContainer) return;

        const handleScroll = () => {
            setOffsetY(scrollContainer.scrollTop);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Fade out the text as it moves up to make the transition smoother
    const textOpacity = Math.max(0, 1 - offsetY / 300);

    return (
        <div 
            className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Layer 1: Background CSS Gradient (moves slowest) */}
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #fde4e4, #f2e6f7)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateZ(-2px) scale(3) translateY(${offsetY * 0.1}px)`,
                }}
            />
            
            {/* Layer 2: Bear and Balloons Image (moves medium speed) */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain"
                style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/d/1mhZ451GTjw-QTyFtR1WXWtAUr2LIzOWZ')`,
                    backgroundPosition: '50% 100%', // Start with the image at the bottom-center
                    transform: `translateZ(-1px) scale(2) translateY(${offsetY * -0.3}px)`,
                    backgroundSize: '50% auto'
                }}
            />

            {/* Layer 3: Header Text (moves fastest) */}
            <div 
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                style={{
                    transform: `translateZ(0px) scale(1) translateY(${offsetY * -0.5}px)`,
                    opacity: textOpacity,
                }}
            >
                 <div className="font-dancing text-shadow-lg text-[#a0529d] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                    <p className="text-5xl md:text-6xl leading-none">al</p>
                    <p className="text-8xl md:text-9xl leading-tight -my-2 md:-my-4">Baby</p>
                    <p className="text-8xl md:text-9xl leading-tight">Shower</p>
                    <p className="text-5xl md:text-6xl leading-none">de...</p>
                </div>
            </div>
        </div>
    );
};

export default ParallaxBackground;