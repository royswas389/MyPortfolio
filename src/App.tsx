import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

import { CoverLeft, CoverRight } from './components/pages/CoverPage';
import { AboutLeft, AboutRight } from './components/pages/AboutPage';
import { SkillsLeft, SkillsRight } from './components/pages/SkillsPage';
import { ExperienceLeft, ExperienceRight } from './components/pages/ExperiencePage';
import { ProjectsLeft, ProjectsRight } from './components/pages/ProjectsPage';
import { EducationLeft, EducationRight } from './components/pages/EducationPage';
import { ContactLeft, ContactRight } from './components/pages/ContactPage';

import { LoadingScreen } from './components/UI/LoadingScreen';
import { Cursor } from './components/UI/Cursor';
import { useMediaQuery } from './hooks/useMediaQuery';

const noiseUrl = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState<'next' | 'prev' | null>(null);

  const navigateToPage = useCallback((targetPage: number) => {
    if (targetPage === currentPage || isFlipping) return;
    if (window.innerWidth <= 1024) {
      setCurrentPage(targetPage);
      return;
    }
    const direction = targetPage > currentPage ? 'next' : 'prev';
    setIsFlipping(direction);
    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsFlipping(null);
    }, 900);
  }, [currentPage, isFlipping]);

  const chapters = [
    { id: 'INTRO', label: '01. HERO', Left: <CoverLeft onNavigate={navigateToPage} />, Right: <CoverRight onNavigate={navigateToPage} /> },
    { id: 'BEHIND THE BUILDS', label: '02. STORY', Left: <AboutLeft />, Right: <AboutRight onNavigate={navigateToPage} /> },
    { id: 'TOOLS I SPEAK', label: '03. STACK', Left: <SkillsLeft />, Right: <SkillsRight /> },
    { id: 'SELECTED BUILDS', label: '04. BUILDS', Left: <ProjectsLeft />, Right: <ProjectsRight /> },
    { id: 'BUILD LOG', label: '05. LOGS', Left: <ExperienceLeft />, Right: <ExperienceRight /> },
    { id: 'THE LAB & LESSONS', label: '06. LAB', Left: <EducationLeft />, Right: <EducationRight /> },
    { id: "LET'S BUILD", label: '07. CONTACT', Left: <ContactLeft />, Right: <ContactRight /> }
  ];

  const totalPages = chapters.length;

  // Use a ref to hold latest state for event listeners without re-binding
  const stateRef = useRef({ currentPage, isFlipping, totalPages });
  useEffect(() => {
    stateRef.current = { currentPage, isFlipping, totalPages };
  }, [currentPage, isFlipping, totalPages]);

  const handleNext = useCallback(() => {
    const { currentPage, isFlipping, totalPages } = stateRef.current;
    if (currentPage < totalPages - 1 && !isFlipping) {
      if (window.innerWidth <= 1024) {
        setCurrentPage((p) => p + 1);
        return;
      }
      setIsFlipping('next');
      setTimeout(() => {
        setCurrentPage((p) => p + 1);
        setIsFlipping(null);
      }, 900);
    }
  }, []);

  const handlePrev = useCallback(() => {
    const { currentPage, isFlipping } = stateRef.current;
    if (currentPage > 0 && !isFlipping) {
      if (window.innerWidth <= 1024) {
        setCurrentPage((p) => p - 1);
        return;
      }
      setIsFlipping('prev');
      setTimeout(() => {
        setCurrentPage((p) => p - 1);
        setIsFlipping(null);
      }, 900);
    }
  }, []);

  useEffect(() => {
    let lastWheelTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 1200) return; // Debounce wheel events

      const { isFlipping } = stateRef.current;
      if (isFlipping) return;

      // Handle scrolling within internal scrollable areas (e.g. project list)
      const target = e.target as HTMLElement;
      const scrollable = target.closest('.overflow-y-auto') as HTMLElement;
      if (scrollable) {
        const isScrollingDown = e.deltaY > 0;
        const isAtBottom = scrollable.scrollHeight - scrollable.scrollTop <= scrollable.clientHeight + 2;
        const isAtTop = scrollable.scrollTop <= 2;

        if (isScrollingDown && !isAtBottom) return; // Let inner element scroll down
        if (!isScrollingDown && !isAtTop) return;   // Let inner element scroll up
      }

      // Trackpad deltas can be small, lower threshold to 10
      if (Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastWheelTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const leftPageNum = isFlipping === 'next' ? currentPage : (isFlipping === 'prev' ? currentPage - 1 : currentPage);
  const rightPageNum = isFlipping === 'next' ? currentPage + 1 : (isFlipping === 'prev' ? currentPage : currentPage);

  return (
    <>
      {!isMobile && <Cursor />}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`bg-[#090909] w-full h-full flex flex-col items-center justify-center font-sans text-[#F1EBDD] overflow-hidden select-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundColor: '#090909' }}
      >

        {/* Top Left Branding */}
        <div className='absolute top-8 left-12 flex flex-col gap-1 z-10'>
          <div className='text-[10px] tracking-[0.3em] font-mono opacity-40 uppercase'>Digital Portfolio</div>
          <div className='text-sm tracking-widest font-serif italic'>Edition 2026</div>
        </div>

        {/* Top Right Chapter */}
        <div className='absolute right-12 top-8 text-right z-10'>
          <div className='text-[10px] tracking-[0.3em] font-mono opacity-40 uppercase mb-1'>Chapter</div>
          <div className='text-2xl font-serif leading-none'>
            0{currentPage + 1} / <span className='opacity-30 text-lg'>0{totalPages}</span>
          </div>
          <div className='text-[10px] tracking-widest font-mono opacity-60 uppercase mt-1'>{chapters[currentPage].id}</div>
        </div>

        {/* Left Chapters Indicator */}
        <div className='absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-10'>
          <div className='w-[1px] h-24 bg-gradient-to-b from-transparent via-[#B58A4A] to-transparent opacity-30'></div>
          <div className='flex flex-col gap-4 text-[11px] font-mono opacity-50 tracking-tighter'>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => navigateToPage(i)}
                className={`transition-all hover:scale-125 cursor-pointer ${i === currentPage ? 'text-[#B58A4A] opacity-100 font-bold scale-110' : 'hover:text-[#F1EBDD] opacity-40'}`}
                title={chapters[i]?.id}
              >
                0{i + 1}
              </button>
            ))}
          </div>
          <div className='w-[1px] h-24 bg-gradient-to-b from-transparent via-[#B58A4A] to-transparent opacity-30'></div>
        </div>

        {/* The Book */}
        {isMobile ? (
          <div className="w-full h-full flex flex-col overflow-y-auto px-6 py-24 relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("${noiseUrl}")` }}></div>
            <div className="w-full min-h-[50vh] bg-[#F1EBDD] rounded-t-sm shadow-xl p-8 text-[#171512] mb-1">
              {chapters[currentPage].Left}
            </div>
            <div className="w-full min-h-[50vh] bg-[#F1EBDD] rounded-b-sm shadow-xl p-8 text-[#171512] mb-16">
              {chapters[currentPage].Right}
            </div>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-[#090909]/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 z-50">
              <button onClick={handlePrev} className="text-[#F1EBDD] disabled:opacity-30" disabled={currentPage === 0}>←</button>
              <span className="font-mono text-[#B58A4A] text-sm">{currentPage + 1} / {totalPages}</span>
              <button onClick={handleNext} className="text-[#F1EBDD] disabled:opacity-30" disabled={currentPage === totalPages - 1}>→</button>
            </div>
          </div>
        ) : (
          <div className='relative w-[920px] max-w-[90vw] h-[580px] flex' style={{ perspective: '2000px' }}>

            {/* Book shadow under */}
            <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-[98%] h-4 bg-black/40 blur-xl rounded-full'></div>

            {/* Book back pages / thickness */}
            <div className='absolute inset-0 flex'>
              <div className='w-1/2 h-full bg-[#DED2BC] translate-y-2 translate-x-2 rounded-l-sm border-b border-l border-black/10 shadow-lg'></div>
              <div className='w-1/2 h-full bg-[#DED2BC] translate-y-2 -translate-x-2 rounded-r-sm border-b border-r border-black/10 shadow-lg'></div>
            </div>

            {/* Main Book Container */}
            <div className='relative flex w-full h-full shadow-2xl rounded-sm overflow-hidden transform' style={{ transform: 'rotateX(2deg)' }}>

              {/* Base Left Page */}
              <div
                onClick={() => !isMobile && handlePrev()}
                data-cursor="turn"
                className={`w-1/2 h-full bg-[#F1EBDD] p-16 flex flex-col border-r border-black/5 relative overflow-hidden text-[#171512] ${!isMobile && currentPage > 0 && !isFlipping ? 'cursor-pointer' : ''}`}
              >
                <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: `url("${noiseUrl}")` }}></div>
                {leftPageNum >= 0 && leftPageNum < totalPages && chapters[leftPageNum].Left}
                <div className='absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none'></div>
              </div>

              {/* Base Right Page */}
              <div
                onClick={() => !isMobile && handleNext()}
                data-cursor="turn"
                className={`w-1/2 h-full bg-[#F1EBDD] p-16 flex flex-col border-l border-black/10 relative overflow-hidden text-[#171512] ${!isMobile && currentPage < totalPages - 1 && !isFlipping ? 'cursor-pointer' : ''}`}
              >
                <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: `url("${noiseUrl}")` }}></div>
                <div className='absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none'></div>
                {rightPageNum >= 0 && rightPageNum < totalPages && chapters[rightPageNum].Right}
              </div>

              {/* Animating Flipper Page */}
              {isFlipping && (
                <div className="absolute inset-0 w-full h-full pointer-events-none z-20 text-[#171512]" style={{ perspective: '2500px' }}>

                  {/* Shadow cast onto the base pages */}
                  <motion.div
                    className="absolute top-0 right-0 h-full bg-black/20"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: isFlipping === 'next' ? '50%' : '0%',
                      opacity: isFlipping === 'next' ? [0, 0.2, 0] : [0, 0.2, 0],
                      left: isFlipping === 'next' ? '0%' : '50%'
                    }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    style={{ filter: 'blur(20px)' }}
                  />

                  <div className="absolute top-0 right-0 w-1/2 h-full">
                    <motion.div
                      className="w-full h-full origin-left transform-style-3d shadow-2xl"
                      initial={{ rotateY: isFlipping === 'next' ? 0 : -180 }}
                      animate={{ rotateY: isFlipping === 'next' ? -180 : 0 }}
                      transition={{ type: 'spring', damping: 25, stiffness: 120, bounce: 0, duration: 0.9 }}
                    >
                      {/* Front Face (Right Page moving to left) */}
                      <div
                        className="absolute inset-0 backface-hidden bg-[#F1EBDD] overflow-hidden rounded-r-sm"
                      >
                        <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: `url("${noiseUrl}")` }}></div>
                        <div className='absolute inset-0 p-16 flex flex-col'>
                          <div className='absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-black/10 to-transparent pointer-events-none'></div>
                          {(isFlipping === 'next' ? currentPage : currentPage - 1) >= 0 && chapters[isFlipping === 'next' ? currentPage : currentPage - 1]?.Right}
                        </div>
                        {/* Shading for front face */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none"
                          initial={{ opacity: isFlipping === 'next' ? 0 : 0.6 }}
                          animate={{ opacity: isFlipping === 'next' ? 0.6 : 0 }}
                          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        />
                      </div>

                      {/* Back Face (Left Page moving to right) */}
                      <div
                        className="absolute inset-0 backface-hidden bg-[#F1EBDD] overflow-hidden rounded-l-sm"
                        style={{ transform: 'rotateY(180deg)' }}
                      >
                        <div className='absolute inset-0 opacity-[0.03] pointer-events-none' style={{ backgroundImage: `url("${noiseUrl}")` }}></div>
                        <div className='absolute inset-0 p-16 flex flex-col'>
                          {(isFlipping === 'next' ? currentPage + 1 : currentPage) < totalPages && chapters[isFlipping === 'next' ? currentPage + 1 : currentPage]?.Left}
                          <div className='absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black/10 to-transparent pointer-events-none'></div>
                        </div>
                        {/* Shading for back face */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
                          initial={{ opacity: isFlipping === 'next' ? 0.6 : 0 }}
                          animate={{ opacity: isFlipping === 'next' ? 0 : 0.6 }}
                          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        {!isMobile && (
          <div className='mt-12 flex items-center gap-16 z-10'>
            <div
              onClick={handlePrev}
              data-cursor="turn"
              className={`flex flex-col items-center gap-2 group transition-opacity ${currentPage === 0 || isFlipping ? 'opacity-20 cursor-not-allowed' : 'opacity-40 hover:opacity-100 cursor-pointer'}`}
            >
              <span className='text-[10px] font-mono uppercase tracking-[0.2em]'>Previous</span>
              <div className='w-10 h-px bg-[#F1EBDD] transition-all group-hover:w-16'></div>
            </div>

            <div className='text-xs font-mono tracking-[0.4em] opacity-40'>
              SCROLL TO READ
            </div>

            <div
              onClick={handleNext}
              data-cursor="turn"
              className={`flex flex-col items-center gap-2 group transition-opacity ${currentPage === totalPages - 1 || isFlipping ? 'opacity-20 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            >
              <span className='text-[10px] font-mono uppercase tracking-[0.2em] text-[#B58A4A]'>Next Page</span>
              <div className='w-10 h-px bg-[#B58A4A] transition-all group-hover:w-16'></div>
            </div>
          </div>
        )}

        {/* Bottom Right Controls */}
        <div className='absolute bottom-8 right-12 flex items-center gap-4 opacity-40 z-10'>
          <div className='text-[9px] font-mono uppercase tracking-widest'>Sound Off</div>
          <div className='w-6 h-3 rounded-full bg-[#F1EBDD]/20 relative'>
            <div className='absolute left-0.5 top-0.5 w-2 h-2 rounded-full bg-[#F1EBDD]'></div>
          </div>
        </div>

      </div>
    </>
  );
}
