
import React from 'react';

interface MusicPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
    // Este componente es ahora solo un control de UI.
    // La lógica de audio y el elemento <audio> se gestionan en App.tsx.
    return (
        <button
            onClick={onToggle}
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            className="music-control-button"
        >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
        </button>
    );
};

export default MusicPlayer;