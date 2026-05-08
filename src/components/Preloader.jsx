import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast counter simulation
    const duration = 1200; // 1.2 seconds total
    const intervalTime = 15;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          // Wait a tiny bit at 100% before removing preloader
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Progress Number */}
          <div className="relative text-7xl md:text-9xl font-bold text-transparent text-stroke-1 text-stroke-slate-800 opacity-20">
            {Math.floor(progress)}%
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mix-blend-difference">
             <div className="text-4xl md:text-6xl font-bold text-white tracking-tighter flex items-center gap-2">
                Jeeshan <span className="text-cyan-400">.</span>
             </div>
             
             {/* Simple loading bar */}
             <div className="w-64 h-1 bg-slate-800 mt-8 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                />
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
