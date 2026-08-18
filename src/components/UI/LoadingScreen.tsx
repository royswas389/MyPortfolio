import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909] text-[#F1EBDD] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <div className="text-center">
        <motion.p
          className="font-mono text-sm tracking-widest text-[#B58A4A] mb-4 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Opening
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-serif tracking-wide mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          SWASTIK ROY
        </motion.h1>
        <motion.p
          className="text-xs md:text-sm font-mono tracking-[0.25em] leading-loose max-w-xs mx-auto text-[#746D60] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          BUILD → BREAK<br />LEARN → SHIP<br />REPEAT
        </motion.p>
      </div>
    </motion.div>
  );
}
