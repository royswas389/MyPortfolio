import { portfolioData } from '../../data/portfolio';
import { ArrowRight, ExternalLink } from 'lucide-react';
import profilePhoto from '../../assets/profile.jpg';

export function CoverLeft({ onNavigate }: { onNavigate?: (pageIndex: number) => void }) {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div className="flex flex-col">
        {/* Status Indicator */}
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B58A4A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B58A4A]"></span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A4A] font-semibold">
            {portfolioData.status}
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-3">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[40px] font-bold text-[#171512] leading-[0.92] tracking-tighter uppercase mb-2">
            {portfolioData.hero.headlineTop}
          </h1>
          <p className="font-serif text-base sm:text-lg lg:text-[18px] font-semibold text-[#333333] leading-snug tracking-tight opacity-90 uppercase">
            {portfolioData.hero.headlineBottom}
          </p>
        </div>

        {/* Supporting Line */}
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B58A4A] font-semibold mb-3">
          {portfolioData.hero.supporting}
        </p>

        <div className="h-px w-14 bg-[#B58A4A] my-2"></div>

        {/* Short Description */}
        <p className="text-[#171512] text-xs sm:text-sm font-sans leading-relaxed opacity-85 max-w-sm">
          {portfolioData.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-2.5 mt-4">
          <button
            onClick={() => onNavigate?.(2)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171512] text-[#F1EBDD] font-mono text-[9px] uppercase tracking-wider hover:bg-[#B58A4A] transition-colors rounded-[2px] cursor-pointer"
          >
            {portfolioData.hero.primaryCta} <ArrowRight size={12} />
          </button>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-black/15 text-[#171512] font-mono text-[9px] uppercase tracking-wider hover:border-[#B58A4A] hover:text-[#B58A4A] transition-colors rounded-[2px]"
          >
            {portfolioData.hero.secondaryCta} <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Footer info & personal tagline */}
      <div className="flex flex-col gap-3 pt-3 border-t border-black/5">
        <div className="flex gap-4 text-[9px] font-mono uppercase tracking-widest text-[#171512] opacity-70">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#B58A4A]">GitHub ↗</a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#B58A4A]">LinkedIn ↗</a>
          <a href={`mailto:${portfolioData.social.email}`} className="cursor-pointer hover:text-[#B58A4A]">Email →</a>
        </div>
        <div className="flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase tracking-widest">
          <span>{portfolioData.tagline}</span>
          <span>{portfolioData.name}</span>
        </div>
      </div>
    </div>
  );
}


export function CoverRight({ onNavigate }: { onNavigate?: (pageIndex: number) => void }) {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div className="flex-1 flex flex-col justify-center items-center gap-4">

        {/* Profile Photo — hero element */}
        <div className="relative w-full max-w-[260px] sm:max-w-[300px] mx-auto">

          {/* Decorative gold corner accents */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#B58A4A] z-20 rounded-tl-[2px]" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#B58A4A] z-20 rounded-tr-[2px]" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#B58A4A] z-20 rounded-bl-[2px]" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#B58A4A] z-20 rounded-br-[2px]" />

          {/* Offset shadow layer */}
          <div
            className="absolute inset-0 bg-[#B58A4A]/20 rounded-[3px]"
            style={{ transform: 'translate(6px, 6px)' }}
          />

          {/* Photo frame */}
          <div className="relative overflow-hidden rounded-[3px] border border-[#B58A4A]/30 shadow-lg">
            <img
              src={profilePhoto}
              alt="Swastik Roy — Developer & Builder"
              className="w-full object-cover object-top"
              style={{
                aspectRatio: '3/4',
                filter: 'grayscale(15%) contrast(1.08) brightness(0.97)',
                display: 'block',
              }}
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background: 'linear-gradient(to top, rgba(23,21,18,0.55) 0%, transparent 100%)',
              }}
            />
            {/* Name badge inside photo */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <div className="font-mono text-[8px] text-[#B58A4A] tracking-[0.3em] uppercase leading-none">
                  SWASTIK ROY
                </div>
                <div className="font-mono text-[7px] text-[#F1EBDD]/60 tracking-widest uppercase mt-0.5">
                  Developer · Builder
                </div>
              </div>
              <div className="font-mono text-[7px] text-[#F1EBDD]/40 tracking-widest uppercase">
                2026
              </div>
            </div>
          </div>
        </div>

        {/* Compact philosophy strip */}
        <div className="w-full max-w-[260px] sm:max-w-[300px] mx-auto px-1">
          <div className="border border-[#B58A4A]/20 bg-[#F1EBDD]/40 rounded-[2px] px-3 py-2 flex items-start gap-2">
            <div className="text-[#B58A4A] text-[11px] mt-0.5 leading-none flex-shrink-0">❝</div>
            <p className="font-serif italic text-[10px] sm:text-[11px] text-[#171512] leading-snug opacity-90">
              {portfolioData.about.philosophy}
            </p>
          </div>
        </div>

      </div>

      {/* Footer nav */}
      <div className="flex justify-between items-end pt-2">
        <div className="text-[9px] font-mono text-[#171512] opacity-40 uppercase">Turn the page to explore</div>
        <button
          onClick={() => onNavigate?.(1)}
          className="w-7 h-7 rounded-full border border-[#B58A4A]/40 flex items-center justify-center text-[#B58A4A] hover:bg-[#B58A4A] hover:text-[#090909] transition-all cursor-pointer"
          title="Next page"
        >
          <span className="text-[11px]">&rarr;</span>
        </button>
      </div>
    </div>
  );
}


