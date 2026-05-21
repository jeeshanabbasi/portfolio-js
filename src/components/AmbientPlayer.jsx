import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, Volume2, VolumeX, Play, Pause, Flame, CloudRain, 
  TreePine, Train, ChevronDown, Radio, Info 
} from 'lucide-react';

export default function AmbientPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Main Radio Stream States
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamVolume, setStreamVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [streamLoading, setStreamLoading] = useState(false);

  // Ambient Sounds States
  const [ambientSounds, setAmbientSounds] = useState([
    {
      id: 'rain',
      name: 'Rainfall',
      url: 'https://raw.githubusercontent.com/karthiknvd/noctune/main/sounds/rain.mp3',
      isPlaying: false,
      volume: 0.4,
      icon: CloudRain,
      color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
      glow: 'shadow-[0_0_15px_rgba(34,211,238,0.2)]'
    },
    {
      id: 'campfire',
      name: 'Campfire',
      url: 'https://raw.githubusercontent.com/karthiknvd/noctune/main/sounds/campfire.mp3',
      isPlaying: false,
      volume: 0.3,
      icon: Flame,
      color: 'text-amber-500 border-amber-500/30 bg-amber-500/5',
      glow: 'shadow-[0_0_15px_rgba(245,158,11,0.2)]'
    },
    {
      id: 'forest',
      name: 'Forest Wind',
      url: 'https://raw.githubusercontent.com/karthiknvd/noctune/main/sounds/forest.mp3',
      isPlaying: false,
      volume: 0.3,
      icon: TreePine,
      color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
      glow: 'shadow-[0_0_15px_rgba(52,211,153,0.2)]'
    },
    {
      id: 'train',
      name: 'Night Train',
      url: 'https://raw.githubusercontent.com/karthiknvd/noctune/main/sounds/train.mp3',
      isPlaying: false,
      volume: 0.2,
      icon: Train,
      color: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.2)]'
    }
  ]);

  // Refs for Audio elements
  const streamAudioRef = useRef(null);
  const ambientAudioRefs = useRef({});

  // Flag to know if any audio is active
  const isAnyAudioPlaying = isPlaying || ambientSounds.some(s => s.isPlaying);

  // Initialize stream volume
  useEffect(() => {
    if (streamAudioRef.current) {
      streamAudioRef.current.volume = isMuted ? 0 : streamVolume;
    }
  }, [streamVolume, isMuted]);

  // Handle stream play/pause
  const toggleStream = () => {
    if (!streamAudioRef.current) return;

    if (isPlaying) {
      streamAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      setStreamLoading(true);
      // Modern browsers require interaction to play audio.
      streamAudioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setStreamLoading(false);
        })
        .catch(err => {
          console.error("Audio playback error: ", err);
          setStreamLoading(false);
        });
    }
  };

  // Setup stream event listeners to handle load states
  useEffect(() => {
    const audio = streamAudioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setStreamLoading(true);
    const handleCanPlay = () => setStreamLoading(false);
    const handleWaiting = () => setStreamLoading(true);
    const handlePlaying = () => {
      setStreamLoading(false);
      setIsPlaying(true);
    };
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  // Handle individual ambient sound play/pause
  const toggleAmbientSound = (id) => {
    const audio = ambientAudioRefs.current[id];
    if (!audio) return;

    setAmbientSounds(prev => prev.map(sound => {
      if (sound.id === id) {
        const nextState = !sound.isPlaying;
        if (nextState) {
          audio.volume = sound.volume;
          audio.play().catch(e => console.error("Error playing ambient: ", e));
        } else {
          audio.pause();
        }
        return { ...sound, isPlaying: nextState };
      }
      return sound;
    }));
  };

  // Handle ambient sound volume change
  const handleAmbientVolumeChange = (id, newVolume) => {
    const audio = ambientAudioRefs.current[id];
    if (audio) {
      audio.volume = newVolume;
    }
    setAmbientSounds(prev => prev.map(sound => 
      sound.id === id ? { ...sound, volume: newVolume } : sound
    ));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamAudioRef.current) {
        streamAudioRef.current.pause();
      }
      Object.values(ambientAudioRefs.current).forEach(audio => {
        if (audio) audio.pause();
      });
    };
  }, []);

  return (
    <>
      {/* Hidden audio element for Lofi Code Radio Stream */}
      <audio 
        ref={streamAudioRef} 
        src="https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/radio.mp3" 
        preload="none"
        crossOrigin="anonymous"
      />

      {/* Hidden audio elements for Ambient sound mixing */}
      {ambientSounds.map(sound => (
        <audio
          key={sound.id}
          ref={el => ambientAudioRefs.current[sound.id] = el}
          src={sound.url}
          loop
          preload="none"
          crossOrigin="anonymous"
        />
      ))}

      {/* FLOATING ACTION BUTTON - BOTTOM LEFT */}
      <div className="fixed bottom-6 left-5 z-[998] flex flex-col items-start">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-cyan-500/20 border transition-all duration-300 ${
                isAnyAudioPlaying 
                  ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
              }`}
              aria-label="ZenDev Ambient Player"
            >
              {isAnyAudioPlaying ? (
                <div className="relative flex items-center justify-center">
                  {/* Outer breathing ring */}
                  <span className="absolute w-14 h-14 rounded-full bg-cyan-500/30 animate-ping -z-10" />
                  {/* Rotating Music icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  >
                    <Music size={24} />
                  </motion.div>
                </div>
              ) : (
                <Music size={24} />
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* DRAGGABLE PLAYER PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.1}
              dragConstraints={{ top: -400, bottom: 50, left: -20, right: 600 }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="w-[310px] bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 overflow-hidden flex flex-col select-none touch-none"
              style={{ x: 0, y: 0 }}
            >
              {/* DRAG HANDLE & HEADER */}
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800/80 pb-3 cursor-grab active:cursor-grabbing">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Radio size={16} className={isPlaying ? 'animate-pulse' : ''} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-none">
                      ZenDev Mixer
                    </h3>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                      Drag to reposition
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  aria-label="Collapse player"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              {/* LOFI STREAM CONTROLLER (freeCodeCamp Code Radio) */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl p-3.5 mb-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-cyan-500 tracking-wider uppercase block">
                      Now Streaming
                    </span>
                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate mt-0.5">
                      freeCodeCamp Code Radio
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      Lofi beats to focus/code
                    </p>
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={toggleStream}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isPlaying 
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                    disabled={streamLoading}
                  >
                    {streamLoading ? (
                      <span className="w-4 h-4 rounded-full border-2 border-slate-400 border-t-transparent animate-spin" />
                    ) : isPlaying ? (
                      <Pause size={16} fill="currentColor" />
                    ) : (
                      <Play size={16} className="ml-0.5" fill="currentColor" />
                    )}
                  </button>
                </div>

                {/* Stream Volume and Controls */}
                <div className="flex items-center gap-2 mt-3.5 pt-3 border-t border-slate-200/50 dark:border-slate-800/40">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {isMuted || streamVolume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={streamVolume}
                    onChange={(e) => {
                      setStreamVolume(parseFloat(e.target.value));
                      if (isMuted) setIsMuted(false);
                    }}
                    className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    style={{ backgroundSize: `${streamVolume * 100}% 100%` }}
                  />
                  
                  {/* Bouncing Audio Bars */}
                  {isPlaying && (
                    <div className="flex items-end gap-[2px] h-3.5 w-6 px-1">
                      {[0.6, 0.3, 0.8, 0.4].map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-[2px] bg-cyan-500 rounded-full"
                          animate={{ height: ['4px', '14px', '4px'] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6 + (i * 0.1),
                            ease: "easeInOut",
                            repeatType: "reverse"
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* AMBIENT SOUNDBOARD MIXER */}
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                  Ambient Environment Mixer
                </h5>
                <div className="space-y-3.5">
                  {ambientSounds.map(sound => {
                    const SoundIcon = sound.icon;
                    return (
                      <div key={sound.id} className="flex items-center gap-3">
                        {/* Sound Button Toggle */}
                        <button
                          onClick={() => toggleAmbientSound(sound.id)}
                          className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            sound.isPlaying 
                              ? `${sound.color} ${sound.glow}`
                              : 'bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-500 dark:text-slate-400'
                          }`}
                          aria-label={`Toggle ${sound.name}`}
                        >
                          <SoundIcon size={16} className={sound.isPlaying ? 'animate-pulse' : ''} />
                        </button>

                        {/* Slider and Label */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[11px] font-medium transition-colors ${
                              sound.isPlaying ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-500'
                            }`}>
                              {sound.name}
                            </span>
                            {sound.isPlaying && (
                              <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">
                                {Math.round(sound.volume * 100)}%
                              </span>
                            )}
                          </div>
                          
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={sound.volume}
                            disabled={!sound.isPlaying}
                            onChange={(e) => handleAmbientVolumeChange(sound.id, parseFloat(e.target.value))}
                            className={`w-full h-1 rounded-lg appearance-none cursor-pointer transition-opacity ${
                              sound.isPlaying 
                                ? 'accent-cyan-500 opacity-100' 
                                : 'accent-slate-400 dark:accent-slate-600 opacity-30 cursor-not-allowed'
                            } bg-slate-200 dark:bg-slate-800`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FOOTER INFO */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[9px] text-slate-400 dark:text-slate-500 justify-center">
                <Info size={10} />
                <span>Layer sounds together for absolute focus</span>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
