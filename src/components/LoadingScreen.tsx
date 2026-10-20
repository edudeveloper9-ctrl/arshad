import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              setIsRemoved(true);
              if (onComplete) onComplete();
            }, 400);
          }, 150);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B1A] transition-opacity duration-400 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing orb background */}
        <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-400/30 blur-2xl animate-pulse" />

        {/* Monogram Box */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl">
          <span className="text-3xl font-extrabold tracking-tighter gradient-text">
            MA
          </span>
        </div>

        <div className="text-sm font-semibold tracking-wider text-slate-200">
          MUDIVEDU ARSHADD
        </div>
        <div className="mt-1 text-xs text-slate-400">
          Full-Stack Developer & Designer
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
