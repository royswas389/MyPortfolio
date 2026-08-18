import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="project"]')) {
        setLabel('Open Case Study ↗');
      } else if (target.closest('a') || target.closest('button')) {
        setLabel(''); // just small dot
      } else {
        setLabel(null);
      }
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className={`rounded-full bg-[#F1EBDD] flex items-center justify-center whitespace-nowrap transition-all duration-300 ${
            label !== null ? (label === '' ? 'w-4 h-4' : 'px-4 py-2 text-xs font-mono text-[#090909]') : 'w-2 h-2'
          }`}
        >
          {label !== null && label !== '' && label}
        </div>
      </div>
    </motion.div>
  );
}
