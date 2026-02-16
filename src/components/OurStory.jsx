import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Volume2, VolumeX, RotateCcw, Play, Pause, Maximize, Minimize } from 'lucide-react';

const OurStory = () => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const progressInterval = useRef(null);

  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const videoId = 'g9Euwg4tGBE';

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      fs: 1, // Enabled to allow the iframe to permit fullscreen requests
      playsinline: 1, // Critical for mobile inline playback
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.setVolume(volume);
    
    setTimeout(() => {
      setShowVideo(true);
    }, 600);

    progressInterval.current = setInterval(() => {
      if (playerRef.current && isPlaying) {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        if (duration > 0) {
          setProgress((currentTime / duration) * 100);
        }
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.setVolume(volume);
      volume === 0 ? playerRef.current.mute() : playerRef.current.unMute();
    }
  }, [volume]);

  // Handle Fullscreen Change (Cross-browser)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = (e) => {
    // Prevent double-triggering if clicking buttons inside the overlay
    if (e) e.stopPropagation();
    if (!playerRef.current) return;
    
    const playerState = playerRef.current.getPlayerState();
    if (playerState === 1) { 
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    if (!playerRef.current) return;
    const newProgress = e.target.value;
    const seekTime = (newProgress / 100) * playerRef.current.getDuration();
    playerRef.current.seekTo(seekTime, true);
    setProgress(newProgress);
  };

  const rewind = (e) => {
    e.stopPropagation();
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 10, true);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const elem = containerRef.current;
    if (!elem) return;

    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // iOS/Safari
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <section id="our-story" className="story-section py-20 bg-white">
      <div className="section-container max-w-4xl mx-auto px-6">
        
        <h2 className="section-title text-center text-5xl mb-12 text-rose-500"
            style={{ fontFamily: "'Great Vibes', cursive" }}>
          Our Story
        </h2>
        
        <div 
          ref={containerRef}
          className={`video-container relative shadow-2xl rounded-2xl overflow-hidden bg-black aspect-video group ${isFullscreen ? 'w-screen h-screen rounded-none' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* YouTube Player Wrapper */}
          <div className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
            <YouTube 
              videoId={videoId} 
              opts={opts} 
              onReady={onReady}
              onStateChange={(e) => setIsPlaying(e.data === 1)}
              className="w-full h-full" 
            />
          </div>

          {/* Black Curtain */}
          {!showVideo && (
            <div className="absolute inset-0 z-40 bg-black flex items-center justify-center">
              <div className="animate-pulse text-rose-500 text-xl italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Preparing our memories...
              </div>
            </div>
          )}

          {/* Controls Overlay */}
          <div 
            className={`absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 cursor-pointer ${isHovered || isFullscreen || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
            onClick={togglePlay}
          >
            {/* Range and Buttons Wrapper */}
            <div onClick={(e) => e.stopPropagation()} className="w-full cursor-default select-none">
              <input 
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 mb-4 bg-white/30 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:h-2 transition-all"
              />

              <div className="flex items-center justify-between touch-none">
                <div className="flex items-center gap-3 md:gap-6">
                  <button onClick={togglePlay} className="text-white hover:text-rose-400 transition-colors">
                    {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                  </button>

                  <button onClick={rewind} className="text-white hover:text-rose-400 flex items-center gap-1 transition-colors">
                    <RotateCcw size={22} />
                    <span className="text-[10px] font-sans font-bold">10s</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-2 ml-2">
                    <button onClick={() => setVolume(volume === 0 ? 50 : 0)} className="text-white">
                      {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={volume} 
                      onChange={(e) => setVolume(parseInt(e.target.value))}
                      className="w-20 md:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />
                  </div>
                </div>

                <button onClick={toggleFullscreen} className="text-white hover:text-rose-400 p-2 transition-transform active:scale-90">
                  {isFullscreen ? <Minimize size={26} /> : <Maximize size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="story-text mt-12 text-center space-y-4">
          <p className="text-gray-400 italic text-lg" 
             style={{ fontFamily: "'Playfair Display', serif" }}>
            Click the video to see our memories...
          </p>
          <p className="text-rose-600 font-bold text-3xl"
             style={{ fontFamily: "'Dancing Script', cursive" }}>
            Every 17th is a win for us, Babyy Ko.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;