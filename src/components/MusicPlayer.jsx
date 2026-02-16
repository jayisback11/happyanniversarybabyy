import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Note: Replace with actual audio URL when available
  const audioUrl = null; // mockData.music.url

  useEffect(() => {
    if (!audioUrl) return;
    
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, audioUrl]);

  const togglePlay = () => {
    if (!audioUrl) {
      // Show message that music will be added
      return;
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="music-player">
      {audioUrl && <audio ref={audioRef} loop src={audioUrl} />}
      
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="music-toggle"
        title={audioUrl ? (isPlaying ? "Pause music" : "Play music") : "Music coming soon"}
      >
        <Music size={20} className={isPlaying ? 'playing' : ''} />
      </Button>
      
      {audioUrl && isPlaying && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="music-volume"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </Button>
      )}
    </div>
  );
};

export default MusicPlayer;
