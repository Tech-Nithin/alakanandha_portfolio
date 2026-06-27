import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onStart?: () => void;
}

const Preloader = ({ onStart }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Disable scrolling during load
    document.body.style.overflow = "hidden";

    const duration = 1200; // Count up in 1.2 seconds
    const intervalTime = 16;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setShowButton(true);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleStart = () => {
    setIsLoaded(true);
    // Re-enable scrolling and reset position to top
    document.body.style.overflow = "";
    window.scrollTo(0, 0);
    if (onStart) onStart();
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col justify-between p-8 md:p-12 font-sans select-none pointer-events-auto"
        >
          {/* Top Label */}
          <div className="flex justify-between items-center w-full">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50">
              ALAKANANDHA® / PORTFOLIO
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50">
              EST. 2026
            </span>
          </div>

          {/* Center Name */}
          <div className="flex flex-col items-start w-full">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white"
            >
              ALAKANANDHA
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-white/30 mt-2"
            >
              Software Engineer
            </motion.p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col w-full min-h-[120px] justify-end">
            <AnimatePresence mode="wait">
              {!showButton ? (
                <motion.div
                  key="progress"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col w-full gap-4"
                >
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold tracking-[0.1em] text-white/40">
                      LOADING ARCHITECTURE
                    </span>
                    <span className="text-5xl md:text-7xl font-black tracking-tighter text-white tabular-nums">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  {/* Minimalist Progress Line */}
                  <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
                    <motion.div 
                      className="absolute left-0 top-0 h-full bg-white"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="button"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex justify-center w-full"
                >
                  <button
                    onClick={handleStart}
                    className="group relative overflow-hidden bg-white text-black font-sans font-black text-sm tracking-[0.25em] uppercase px-16 py-5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl flex items-center gap-3 cursor-pointer"
                  >
                    <span>START</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
