import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2,
  Music,
  SkipBack,
  SkipForward,
  List,
} from "lucide-react";

const tracks = [
  {
    title: "DJ NGGAK DULU",
    artist: "DJ NGGAK DULU",
    url: "/music/DJ NGGAK DULU.mp3",
  },
  {
    title: "Blue - yung kai",
    artist: "Blue - yung kai",
    url: "/music/Blue - yung kai.mp3",
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle track change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        // Ensure context is running
        if (audioContextRef.current?.state === "suspended") {
          audioContextRef.current.resume();
        }

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Restart visualizer if it stopped
              if (!animationRef.current) {
                drawVisualizer();
              }
            })
            .catch((e) => console.error("Play error:", e));
        }
      }
    }
  }, [currentTrackIndex]);

  // Restart visualizer when view changes (minimize/playlist toggle)
  useEffect(() => {
    if (isPlaying && !isMinimized && !isPlaylistOpen && canvasRef.current) {
      drawVisualizer();
    }
  }, [isPlaying, isMinimized, isPlaylistOpen]);

  const initializeAudioContext = () => {
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;

      if (audioRef.current) {
        // Check if source already exists to avoid error
        if (!sourceRef.current) {
          sourceRef.current = audioContextRef.current.createMediaElementSource(
            audioRef.current
          );
          sourceRef.current.connect(analyserRef.current);
          analyserRef.current.connect(audioContextRef.current.destination);
        }
      }
    }
  };

  const drawVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Cancel existing animation to prevent duplicates
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * canvas.height;

        const gradient = ctx.createLinearGradient(
          0,
          canvas.height - barHeight,
          0,
          canvas.height
        );
        gradient.addColorStop(0, "#a855f7");
        gradient.addColorStop(1, "#ec4899");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    draw();
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (!audioContextRef.current) {
      initializeAudioContext();
    }

    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }

    if (isPlaying) {
      audioRef.current.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    } else {
      try {
        await audioRef.current.play();
        drawVisualizer();
      } catch (error) {
        console.error("Playback failed:", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = async () => {
    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = async () => {
    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleTrackSelect = async (index) => {
    if (audioContextRef.current?.state === "suspended") {
      await audioContextRef.current.resume();
    }
    setCurrentTrackIndex(index);
    if (!isPlaying) {
      setIsPlaying(true); // Set playing state so useEffect triggers play
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-8 left-8 z-50 transition-all duration-300 ${
        isMinimized ? "w-14 h-14" : "w-80"
      }`}
    >
      <div
        className={`bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 ${
          isMinimized
            ? "rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-white/10"
            : "rounded-2xl w-full"
        }`}
        onClick={() => isMinimized && setIsMinimized(false)}
      >
        {isMinimized ? (
          <div
            className={`text-purple-400 ${
              isPlaying ? "animate-spin-slow" : ""
            }`}
          >
            <Music size={24} />
          </div>
        ) : (
          <>
            {/* Header / Controls */}
            <div className="p-4 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3 overflow-hidden">
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${
                    isPlaying
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  <Music
                    size={20}
                    className={isPlaying ? "animate-pulse" : ""}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white text-sm font-bold truncate">
                    {currentTrack.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {currentTrack.artist}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                  className={`transition-colors ${
                    isPlaylistOpen
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List size={16} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(true);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Minimize2 size={16} />
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            <div className="p-4 pt-0">
              {/* Playlist View */}
              <AnimatePresence>
                {isPlaylistOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-4 overflow-hidden"
                  >
                    <div className="max-h-32 overflow-y-auto pr-2 space-y-1 custom-scrollbar">
                      {tracks.map((track, index) => (
                        <button
                          key={index}
                          onClick={() => handleTrackSelect(index)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                            currentTrackIndex === index
                              ? "bg-purple-500/20 text-purple-300"
                              : "hover:bg-white/5 text-gray-400"
                          }`}
                        >
                          <span className="truncate">{track.title}</span>
                          {currentTrackIndex === index && isPlaying && (
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Visualizer Canvas */}
              {!isPlaylistOpen && (
                <div className="h-24 w-full bg-black/40 rounded-lg mb-4 overflow-hidden relative">
                  <canvas
                    ref={canvasRef}
                    width={280}
                    height={96}
                    className="w-full h-full"
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs">
                      Visualizer Paused
                    </div>
                  )}
                </div>
              )}

              {/* Controls */}
              <div className="flex flex-col gap-4">
                {/* Playback Controls */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={handlePrev}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SkipBack size={20} />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause size={20} fill="currentColor" />
                    ) : (
                      <Play size={20} fill="currentColor" className="ml-1" />
                    )}
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SkipForward size={20} />
                  </button>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-gray-400 hover:text-white"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:rounded-full"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onEnded={handleNext}
          crossOrigin="anonymous"
        />
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
