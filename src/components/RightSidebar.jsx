import { useState, useEffect, useRef } from 'react';
import { Shield, RefreshCw, Trophy, AlertTriangle, Play } from 'lucide-react';

export default function RightSidebar() {
  const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING, GAMEOVER
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('hansi-hacker-highscore') || '0', 10);
  });
  const [lives, setLives] = useState(3);
  const [targetNode, setTargetNode] = useState(null);
  
  // Animation tracking for progress countdown
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);
  const lastTargetTimeRef = useRef(0);

  // Coupling the game score to the background canvas particle speed
  useEffect(() => {
    if (gameState === 'PLAYING') {
      // Background speed increments by 15% per point scored
      window.cyberSpeedFactor = 1.0 + score * 0.15;
    } else {
      window.cyberSpeedFactor = 1.0;
    }
    return () => {
      window.cyberSpeedFactor = 1.0;
    };
  }, [gameState, score]);

  // Target expiration timer loop
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    // Time allowed decreases as score increases
    // Starts at 1600ms, decreases by 60ms per score, floor at 500ms
    const timeLimit = Math.max(500, 1600 - score * 60);
    lastTargetTimeRef.current = Date.now();
    setProgress(100);

    // Tick progress bar every 30ms
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - lastTargetTimeRef.current;
      const remainingPct = Math.max(0, 100 - (elapsed / timeLimit) * 100);
      setProgress(remainingPct);

      if (elapsed >= timeLimit) {
        clearInterval(progressInterval);
        handleTimeout();
      }
    }, 30);

    timerRef.current = progressInterval;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, targetNode, score]);

  const startGame = () => {
    if (window.playCyberChime) window.playCyberChime('success');
    setScore(0);
    setLives(3);
    setGameState('PLAYING');
    spawnTarget(null);
  };

  const spawnTarget = (current) => {
    let next;
    do {
      next = Math.floor(Math.random() * 9);
    } while (next === current);
    setTargetNode(next);
  };

  const handleTimeout = () => {
    if (window.playCyberChime) window.playCyberChime('alert');
    setLives((prev) => {
      const nextLives = prev - 1;
      if (nextLives <= 0) {
        triggerGameOver();
        return 0;
      }
      spawnTarget(targetNode);
      return nextLives;
    });
  };

  const triggerGameOver = () => {
    setGameState('GAMEOVER');
    if (timerRef.current) clearInterval(timerRef.current);
    setTargetNode(null);

    setHighScore((prev) => {
      if (score > prev) {
        localStorage.setItem('hansi-hacker-highscore', score.toString());
        return score;
      }
      return prev;
    });
  };

  const handleNodeClick = (id) => {
    if (gameState !== 'PLAYING') return;

    if (id === targetNode) {
      // Hit!
      if (window.playCyberChime) window.playCyberChime('click');
      setScore((prev) => prev + 1);
      if (timerRef.current) clearInterval(timerRef.current);
      spawnTarget(targetNode);
    } else {
      // Miss!
      if (window.playCyberChime) window.playCyberChime('alert');
      setLives((prev) => {
        const nextLives = prev - 1;
        if (nextLives <= 0) {
          triggerGameOver();
          return 0;
        }
        if (timerRef.current) clearInterval(timerRef.current);
        spawnTarget(targetNode);
        return nextLives;
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:block font-mono text-[9px] w-36 select-none">
      <div className="bg-base-200/85 border border-primary/20 hover:border-primary/50 rounded-xl p-3 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col gap-3">
        
        {/* Game Title */}
        <div className="flex items-center justify-between border-b border-primary/10 pb-1.5 font-bold tracking-wider text-primary">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" /> PORT_SHIELD
          </span>
          <span className={`w-1.5 h-1.5 rounded-full ${gameState === 'PLAYING' ? 'bg-primary animate-ping' : 'bg-base-content/20'}`} />
        </div>

        {/* --- IDLE STATE --- */}
        {gameState === 'IDLE' && (
          <div className="flex flex-col gap-2.5 text-center py-1.5">
            <p className="text-[7.5px] leading-relaxed text-base-content/60">
              Threat ports will flash. Patch them before they breach! Speed scales with score.
            </p>
            
            <div className="bg-base-300/60 rounded border border-primary/10 py-1.5 px-2 flex items-center justify-center gap-1 text-[8px] text-primary">
              <Trophy className="w-3.5 h-3.5" />
              <span>HIGH SCORE: <strong>{highScore}</strong></span>
            </div>

            <button
              onClick={startGame}
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-base-100 hover:bg-primary-hover font-bold transition-all duration-200 cursor-pointer uppercase text-[8px]"
            >
              <Play className="w-2.5 h-2.5 fill-current" /> Start Hack
            </button>
          </div>
        )}

        {/* --- PLAYING STATE --- */}
        {gameState === 'PLAYING' && (
          <div className="flex flex-col gap-3">
            {/* Stats Header */}
            <div className="flex justify-between items-center text-[8px] text-base-content/80">
              <div>
                SCORE: <strong className="text-primary">{score}</strong>
              </div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Shield 
                    key={i} 
                    className={`w-3 h-3 transition-colors duration-150 ${
                      i < lives 
                        ? 'fill-primary text-primary' 
                        : 'text-base-content/25'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* Expire Progress Countdown Bar */}
            <div className="w-full bg-base-300 h-1 rounded overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-300"
                style={{ width: `${progress}%`, transition: 'width 30ms linear' }}
              />
            </div>

            {/* 3x3 Nodes Grid */}
            <div className="grid grid-cols-3 gap-1.5 bg-base-300/40 p-1.5 rounded border border-primary/10">
              {Array.from({ length: 9 }).map((_, id) => {
                const isTarget = id === targetNode;
                return (
                  <button
                    key={id}
                    onClick={() => handleNodeClick(id)}
                    className={`w-full aspect-square rounded transition-all duration-100 focus:outline-none relative overflow-hidden ${
                      isTarget
                        ? 'bg-primary border border-primary animate-pulse shadow-[0_0_8px_rgba(224,64,211,0.6)] cursor-pointer'
                        : 'bg-base-300 border border-primary/10 hover:border-primary/30 cursor-pointer'
                    }`}
                  >
                    <div className={`absolute inset-1.5 rounded-full transition-all duration-100 ${
                      isTarget 
                        ? 'bg-base-100 scale-75 animate-ping' 
                        : 'bg-primary/5 scale-50 group-hover:scale-75'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* --- GAMEOVER STATE --- */}
        {gameState === 'GAMEOVER' && (
          <div className="flex flex-col gap-2.5 text-center py-1">
            <div className="flex items-center justify-center gap-1.5 text-primary text-[8.5px] font-bold uppercase animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" /> Breach Detected
            </div>

            <div className="space-y-1 text-base-content/75">
              <div className="text-[7.5px] uppercase text-base-content/40">FINAL SCORE:</div>
              <div className="text-lg font-bold text-primary">{score}</div>
              {score >= highScore && score > 0 && (
                <div className="text-[7.5px] text-primary font-bold tracking-widest uppercase">NEW BEST!</div>
              )}
            </div>

            <div className="bg-base-300/60 rounded border border-primary/10 py-1.5 px-2 flex items-center justify-center gap-1 text-[7.5px] text-base-content/60">
              <Trophy className="w-3 h-3 text-primary" />
              <span>RECORD: <strong>{highScore}</strong></span>
            </div>

            <button
              onClick={startGame}
              className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-base-300 border border-primary/15 hover:bg-primary hover:text-base-100 hover:border-primary text-base-content font-bold transition-all duration-200 cursor-pointer uppercase text-[8px]"
            >
              <RefreshCw className="w-2.5 h-2.5" /> Restart Hack
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
