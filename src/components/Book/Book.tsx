import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CoverLeft, CoverRight } from '../pages/CoverPage';
import { AboutLeft, AboutRight } from '../pages/AboutPage';
import { SkillsLeft, SkillsRight } from '../pages/SkillsPage';
import { ExperienceLeft, ExperienceRight } from '../pages/ExperiencePage';
import { ProjectsLeft, ProjectsRight } from '../pages/ProjectsPage';
import { EducationLeft, EducationRight } from '../pages/EducationPage';
import { ContactLeft, ContactRight } from '../pages/ContactPage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chapters = [
  { id: 'cover', Left: <CoverLeft />, Right: <CoverRight /> },
  { id: 'about', Left: <AboutLeft />, Right: <AboutRight /> },
  { id: 'skills', Left: <SkillsLeft />, Right: <SkillsRight /> },
  { id: 'experience', Left: <ExperienceLeft />, Right: <ExperienceRight /> },
  { id: 'projects', Left: <ProjectsLeft />, Right: <ProjectsRight /> },
  { id: 'education', Left: <EducationLeft />, Right: <EducationRight /> },
  { id: 'contact', Left: <ContactLeft />, Right: <ContactRight /> }
];

export function Book() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [currentChapter, setCurrentChapter] = useState(0);
  const [animating, setAnimating] = useState<'next' | 'prev' | null>(null);

  const turnNext = () => {
    if (animating || currentChapter >= chapters.length - 1) return;
    setAnimating('next');
    setTimeout(() => {
      setCurrentChapter(c => c + 1);
      setAnimating(null);
    }, 1000); // Wait for CSS animation
  };

  const turnPrev = () => {
    if (animating || currentChapter <= 0) return;
    setAnimating('prev');
    setTimeout(() => {
      setCurrentChapter(c => c - 1);
      setAnimating(null);
    }, 1000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        turnNext();
      } else if (e.key === 'ArrowLeft') {
        turnPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapter, animating]);

  // Wheel navigation
  useEffect(() => {
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 1500) return; // Debounce
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          turnNext();
        } else {
          turnPrev();
        }
        lastWheelTime = now;
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentChapter, animating]);

  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col relative overflow-hidden bg-[#090909]">
        <div className="flex-1 relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentChapter}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="absolute inset-0 overflow-y-auto"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  turnNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  turnPrev();
                }
              }}
            >
              <div className="min-h-[200vh] flex flex-col">
                <div className="h-screen w-full">{chapters[currentChapter].Left}</div>
                <div className="h-screen w-full">{chapters[currentChapter].Right}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Mobile Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-[#090909]/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-50">
           <button onClick={turnPrev} className="text-[#F1EBDD] disabled:opacity-30" disabled={currentChapter === 0}><ChevronLeft size={24} /></button>
           <span className="font-mono text-[#B58A4A] text-sm">{currentChapter + 1} / {chapters.length}</span>
           <button onClick={turnNext} className="text-[#F1EBDD] disabled:opacity-30" disabled={currentChapter === chapters.length - 1}><ChevronRight size={24} /></button>
        </div>
      </div>
    );
  }

  // Desktop Book Layout
  const leftPageIdx = animating === 'next' ? currentChapter : (animating === 'prev' ? currentChapter - 1 : currentChapter);
  const rightPageIdx = animating === 'next' ? currentChapter + 1 : (animating === 'prev' ? currentChapter : currentChapter);
  
  const FlipperFront = animating === 'next' ? chapters[currentChapter].Right : chapters[currentChapter - 1]?.Right;
  const FlipperBack = animating === 'next' ? chapters[currentChapter + 1]?.Left : chapters[currentChapter].Left;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full perspective-[2500px]">
      <div 
        className="relative w-[90vw] max-w-7xl aspect-[2.2/1.3] shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform-style-3d transition-transform duration-700 ease-out"
        style={{ transform: `rotateX(10deg) rotateY(0deg) scale(0.95)` }}
      >
        {/* Book Binding/Spine */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-[#111] z-0 shadow-inner"></div>

        {/* Base Left Page */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F1EBDD] overflow-hidden z-0">
          {leftPageIdx >= 0 && chapters[leftPageIdx].Left}
        </div>

        {/* Base Right Page */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F1EBDD] overflow-hidden z-0">
          {rightPageIdx < chapters.length && chapters[rightPageIdx].Right}
        </div>

        {/* Flipper Page */}
        {animating && (
          <div className="absolute top-0 right-0 w-1/2 h-full perspective-[3000px] pointer-events-none z-20">
            <motion.div
              className="w-full h-full origin-left transform-style-3d"
              initial={{ rotateY: animating === 'next' ? 0 : -180 }}
              animate={{ rotateY: animating === 'next' ? -180 : 0 }}
              transition={{ duration: 1, ease: [0.64, 0.04, 0.35, 1] }}
            >
              {/* Front Face of Flipper (Right Page) */}
              <div 
                className="absolute inset-0 backface-hidden bg-[#F1EBDD] overflow-hidden shadow-[-5px_0_25px_rgba(0,0,0,0.15)]"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {FlipperFront}
                {/* Dynamic shadow that gets darker as it flips over */}
                <motion.div 
                   className="absolute inset-0 bg-black pointer-events-none"
                   initial={{ opacity: animating === 'next' ? 0 : 0.4 }}
                   animate={{ opacity: animating === 'next' ? 0.4 : 0 }}
                   transition={{ duration: 1, ease: [0.64, 0.04, 0.35, 1] }}
                />
              </div>

              {/* Back Face of Flipper (Left Page) */}
              <div 
                className="absolute inset-0 backface-hidden bg-[#F1EBDD] overflow-hidden shadow-[5px_0_25px_rgba(0,0,0,0.15)]"
                style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {FlipperBack}
                {/* Dynamic shadow that gets lighter as it flips over */}
                <motion.div 
                   className="absolute inset-0 bg-black pointer-events-none"
                   initial={{ opacity: animating === 'next' ? 0.4 : 0 }}
                   animate={{ opacity: animating === 'next' ? 0 : 0.4 }}
                   transition={{ duration: 1, ease: [0.64, 0.04, 0.35, 1] }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 flex items-center gap-12 mt-12 z-50 bg-[#090909]/50 px-8 py-4 rounded-full backdrop-blur-sm border border-white/5">
        <button 
          onClick={turnPrev} 
          className="flex items-center gap-2 text-[#746D60] hover:text-[#F1EBDD] disabled:opacity-30 transition-colors uppercase text-xs font-mono tracking-widest cursor-pointer"
          disabled={currentChapter === 0 || !!animating}
        >
          <ChevronLeft size={16} /> Previous
        </button>
        <div className="font-mono text-[#B58A4A] tracking-widest text-sm flex gap-4">
           {chapters.map((_, i) => (
             <button 
                key={i}
                onClick={() => {
                  if (animating || i === currentChapter) return;
                  // Handle quick jump (just change state, no animation for simplicity, or complex multi-flip)
                  // For a seamless experience, we just fade cross if it's > 1 page diff
                  if (Math.abs(i - currentChapter) === 1) {
                    if (i > currentChapter) turnNext();
                    else turnPrev();
                  } else {
                    setCurrentChapter(i);
                  }
                }}
                className={`transition-colors ${currentChapter === i ? 'text-[#B58A4A]' : 'text-[#746D60] hover:text-[#F1EBDD]'}`}
             >
               0{i + 1}
             </button>
           ))}
        </div>
        <button 
          onClick={turnNext} 
          className="flex items-center gap-2 text-[#746D60] hover:text-[#F1EBDD] disabled:opacity-30 transition-colors uppercase text-xs font-mono tracking-widest cursor-pointer"
          disabled={currentChapter === chapters.length - 1 || !!animating}
        >
          Next <ChevronRight size={16} />
        </button>
      </div>

      <div className="absolute top-8 text-[#746D60] font-mono text-xs uppercase tracking-widest flex items-center gap-3">
         <span className="w-8 h-[1px] bg-[#B58A4A]"></span>
         Chapter 0{currentChapter + 1}
         <span className="w-8 h-[1px] bg-[#B58A4A]"></span>
      </div>
    </div>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
