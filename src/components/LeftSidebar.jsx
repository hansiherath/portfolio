import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Radio, Activity } from 'lucide-react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

// Scramble Text Tooltip Hook/Helper
function ScrambleText({ targetText, trigger }) {
  const [text, setText] = useState(targetText);

  useEffect(() => {
    if (!trigger) {
      setText(targetText);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setText(() =>
        targetText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iterations) return targetText[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3; // speed up or slow down scramble resolution
    }, 25);

    return () => clearInterval(interval);
  }, [trigger, targetText]);

  return <span>{text}</span>;
}

export default function LeftSidebar({ activeSection, onNavClick }) {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Studies' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'contact', label: 'Connect' }
  ];

  const [hoveredSection, setHoveredSection] = useState(null);
  
  // Audio Synthesizer State
  const [synthActive, setSynthActive] = useState(false);
  const [chimesEnabled, setChimesEnabled] = useState(true);
  const [frequency, setFrequency] = useState(55); // 55Hz base drone (pitch)
  const [waveOffset, setWaveOffset] = useState(0);

  // Audio Graph References
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const lfoRef = useRef(null);
  const filterRef = useRef(null);
  const gainNodeRef = useRef(null);
  const animationRef = useRef(null);

  // Expose playChime to window object for other components
  useEffect(() => {
    window.cyberChimeEnabled = chimesEnabled;
    window.playCyberChime = (type = 'click') => {
      if (!window.cyberChimeEnabled) return;
      try {
        const ctx = audioCtxRef.current || window.cyberAudioCtx || new (window.AudioContext || window.webkitAudioContext)();
        if (!audioCtxRef.current) {
          audioCtxRef.current = ctx;
          window.cyberAudioCtx = ctx;
        }
        if (ctx.state === 'suspended') ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (type === 'click') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(750, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.06, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
          osc.start();
          osc.stop(ctx.currentTime + 0.08);
        } else if (type === 'success') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
          osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.08); // G5
          gain.gain.setValueAtTime(0.1, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        } else if (type === 'alert') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(260, ctx.currentTime);
          osc.frequency.linearRampToValueAtTime(130, ctx.currentTime + 0.18);
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
          osc.start();
          osc.stop(ctx.currentTime + 0.18);
        }
      } catch (e) {
        console.warn("Chime error:", e);
      }
    };

    return () => {
      window.playCyberChime = null;
    };
  }, [chimesEnabled]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      stopAmbience();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Animate SVG Waveform
  useEffect(() => {
    let frame;
    const animateWave = () => {
      setWaveOffset((prev) => (prev + (synthActive ? frequency / 250 : 0.08)) % (Math.PI * 2));
      frame = requestAnimationFrame(animateWave);
    };
    frame = requestAnimationFrame(animateWave);
    animationRef.current = frame;
    return () => cancelAnimationFrame(frame);
  }, [synthActive, frequency]);

  const startAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      window.cyberAudioCtx = ctx;

      // Create primary elements
      const osc = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();

      // Setup Synth Drone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      // Filter settings (Low-pass creates deep cyber rumbling hum)
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, ctx.currentTime);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);

      // LFO sweeps filter frequency to create "breathing" drone
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.18, ctx.currentTime); // 0.18Hz sweep rate
      lfoGain.gain.setValueAtTime(45, ctx.currentTime); // Sweep depth +/- 45Hz

      // Connect LFO to filter frequency
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Connect primary audio chain
      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Fade-in volume gently to prevent pops
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.5);

      // Keep references
      oscRef.current = osc;
      lfoRef.current = lfo;
      filterRef.current = filter;
      gainNodeRef.current = gainNode;

      // Start oscillators
      osc.start();
      lfo.start();
      setSynthActive(true);
      
      // Play indicator chime
      setTimeout(() => {
        if (window.playCyberChime) window.playCyberChime('success');
      }, 50);

    } catch (err) {
      console.error("Failed to initialize system synth:", err);
    }
  };

  const stopAmbience = () => {
    const ctx = audioCtxRef.current;
    const gainNode = gainNodeRef.current;
    
    if (gainNode && ctx) {
      try {
        // Fade-out volume before stopping
        gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
        
        setTimeout(() => {
          if (oscRef.current) { oscRef.current.stop(); oscRef.current.disconnect(); }
          if (lfoRef.current) { lfoRef.current.stop(); lfoRef.current.disconnect(); }
          if (filterRef.current) filterRef.current.disconnect();
          if (gainNodeRef.current) gainNodeRef.current.disconnect();
          if (audioCtxRef.current) audioCtxRef.current.close();
          
          oscRef.current = null;
          lfoRef.current = null;
          filterRef.current = null;
          gainNodeRef.current = null;
          audioCtxRef.current = null;
          setSynthActive(false);
        }, 500);
      } catch (e) {
        setSynthActive(false);
      }
    } else {
      setSynthActive(false);
    }
  };

  const toggleSynth = () => {
    if (synthActive) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  // Adjust oscillator pitch dynamically
  const handleFreqChange = (e) => {
    const val = parseFloat(e.target.value);
    setFrequency(val);
    if (oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.exponentialRampToValueAtTime(val, audioCtxRef.current.currentTime + 0.1);
    }
  };

  // Generate SVG Path coordinates for the oscilloscope display
  const getWavePath = () => {
    let points = [];
    const width = 100;
    const height = 24;
    const amplitude = synthActive ? 8 : 1.5;
    const freq = synthActive ? (frequency / 25) : 1.5;

    for (let x = 0; x <= width; x += 2) {
      const y = (height / 2) + Math.sin((x * freq * 0.1) + waveOffset) * amplitude;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(" L ")}`;
  };

  const handleDotClick = (id) => {
    if (window.playCyberChime) window.playCyberChime('click');
    onNavClick(id);
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-5 font-mono text-[9px] text-base-content/40">
      
      {/* Scrollspy Navigation Header */}
      <div className="flex flex-col items-center select-none space-y-1">
        <span className="text-primary/60 font-semibold tracking-widest text-[8px] uppercase">NAVIGATE</span>
        <div className="w-[1px] h-8 bg-primary/20" />
      </div>

      {/* Scramble-Text ScrollSpy Dots */}
      <div className="flex flex-col gap-4.5 my-1">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => handleDotClick(sec.id)}
            onMouseEnter={() => {
              setHoveredSection(sec.id);
              if (window.playCyberChime) window.playCyberChime('click');
            }}
            onMouseLeave={() => setHoveredSection(null)}
            className="group relative flex flex-col items-center justify-center w-5 h-5 bg-transparent border-none p-0 cursor-pointer focus:outline-none"
          >
            {/* Scrambling Text Label Tooltip */}
            <span className="absolute left-7 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap bg-base-200 border border-primary/20 text-primary px-2 py-0.5 rounded shadow-lg font-bold font-mono pointer-events-none text-[8px] tracking-wider uppercase">
              <ScrambleText targetText={sec.label} trigger={hoveredSection === sec.id} />
            </span>

            {/* Interactive Dot Visual */}
            <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              activeSection === sec.id 
                ? 'bg-primary border-primary scale-125 shadow-[0_0_12px_rgba(224,64,211,0.7)]' 
                : 'border-primary/40 bg-base-200 group-hover:bg-primary/40 group-hover:scale-110'
            }`} />
          </button>
        ))}
      </div>

      {/* Decorative vertical separator */}
      <div className="w-[1px] h-8 bg-primary/20" />

      {/* Holographic Ambient Synth Panel */}
      <div className="bg-base-200/85 border border-primary/20 hover:border-primary/50 rounded-xl p-3 w-32 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col gap-2.5 select-none text-[8px]">
        
        {/* Synth Title */}
        <div className="flex items-center justify-between border-b border-primary/10 pb-1.5 font-bold tracking-wider text-primary">
          <span className="flex items-center gap-1"><Radio className="w-3 h-3 animate-pulse" /> SYS_AUDIO</span>
          <span className={`w-1.5 h-1.5 rounded-full ${synthActive ? 'bg-primary animate-ping' : 'bg-base-content/20'}`} />
        </div>

        {/* Oscilloscope Waveform Visualizer */}
        <div className="w-full h-7 bg-base-300/60 rounded border border-primary/15 flex items-center justify-center overflow-hidden relative">
          <svg className="w-full h-full" viewBox="0 0 100 24" fill="none">
            <path
              d={getWavePath()}
              stroke={synthActive ? "var(--primary)" : "rgba(224, 64, 211, 0.2)"}
              strokeWidth={synthActive ? "1.5" : "1"}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          {synthActive && (
            <Activity className="absolute right-1 bottom-1 w-2.5 h-2.5 text-primary/40 animate-pulse" />
          )}
        </div>

        {/* Ambient Synth Controller Toggle */}
        <div className="flex items-center justify-between gap-1">
          <span className="text-base-content/60 font-semibold">AMBIENCE:</span>
          <button
            onClick={toggleSynth}
            className={`px-1.5 py-0.5 rounded text-[7px] font-bold border transition-all duration-200 cursor-pointer ${
              synthActive 
                ? 'bg-primary text-base-100 border-primary shadow-[0_0_8px_rgba(224,64,211,0.3)]' 
                : 'bg-base-300 border-primary/20 text-base-content/50 hover:border-primary/50'
            }`}
          >
            {synthActive ? 'ONLINE' : 'OFFLINE'}
          </button>
        </div>

        {/* Pitch / Frequency Range Slider */}
        {synthActive && (
          <div className="space-y-1 animate-fade-in">
            <div className="flex justify-between text-[7px] text-base-content/50">
              <span>FREQ BIAS:</span>
              <span className="text-primary font-bold">{Math.round(frequency)}Hz</span>
            </div>
            <input
              type="range"
              min="40"
              max="120"
              value={frequency}
              onChange={handleFreqChange}
              className="w-full h-1 bg-base-300 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        )}

        {/* Audio Chimes Feedback Controller */}
        <div className="flex items-center justify-between border-t border-primary/10 pt-2 text-[7px]">
          <span className="text-base-content/50">KEY_SOUNDS:</span>
          <button
            onClick={() => setChimesEnabled(!chimesEnabled)}
            className="text-base-content/60 hover:text-primary transition focus:outline-none cursor-pointer"
            title={chimesEnabled ? "Mute chimes" : "Unmute chimes"}
          >
            {chimesEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-primary" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-base-content/30" />
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
