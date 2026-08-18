import { portfolioData } from '../../data/portfolio';
import { ArrowRight } from 'lucide-react';

export function AboutLeft() {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div>
        <div className="mb-4">
          <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">02 // BEHIND THE BUILDS</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#171512] font-bold leading-tight uppercase">
            {portfolioData.about.title}
          </h2>
          <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
        </div>

        {/* Narrative Copy */}
        <div className="font-sans text-[#171512] opacity-90 space-y-2.5 text-xs sm:text-[13px] leading-relaxed max-w-md">
          {portfolioData.about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "font-serif text-sm sm:text-base italic text-[#171512] opacity-100 font-semibold" : ""}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-black/5 pt-3">
        <div className="flex justify-between items-center text-[9px] font-mono text-[#171512] opacity-70 uppercase tracking-wider">
          <span>{portfolioData.about.focus}</span>
          <span className="text-[#B58A4A] font-semibold">{portfolioData.about.location}</span>
        </div>
      </div>
    </div>
  );
}

export function AboutRight({ onNavigate }: { onNavigate?: (pageIndex: number) => void }) {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between pt-1">
      <div>
        {/* "No Job Title Yet" Card */}
        <div className="p-4 sm:p-5 border border-[#B58A4A]/30 bg-[#DED2BC]/30 rounded-[2px] mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-[#B58A4A]/15 text-[#B58A4A] font-mono text-[8px] uppercase tracking-widest px-3 py-1 rounded-bl">
            HONEST TAKE
          </div>
          
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#171512] uppercase leading-tight mb-0.5">
            {portfolioData.noExperienceSection.title}
          </h3>
          <h4 className="font-mono text-[9px] text-[#B58A4A] tracking-widest uppercase mb-2.5 font-semibold">
            {portfolioData.noExperienceSection.subtitle}
          </h4>

          <p className="font-sans text-xs text-[#171512] opacity-80 leading-relaxed mb-3">
            {portfolioData.noExperienceSection.copy}
          </p>

          <button
            onClick={() => onNavigate?.(2)}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#171512] text-[#F1EBDD] font-mono text-[9px] uppercase tracking-wider hover:bg-[#B58A4A] transition-colors rounded-[2px] cursor-pointer"
          >
            {portfolioData.noExperienceSection.cta} <ArrowRight size={11} />
          </button>
        </div>

        {/* Currently Figuring Out Preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B58A4A] font-semibold">
              {portfolioData.learningAreas.title}
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {portfolioData.learningAreas.topics.map((topic, i) => (
              <div key={i} className="p-2 border border-black/5 bg-[#F1EBDD]/70 rounded-[2px]">
                <div className="font-serif text-xs font-bold text-[#171512]">{topic.name}</div>
                <div className="font-sans text-[9px] text-[#171512] opacity-65 truncate">{topic.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>{portfolioData.learningAreas.subtext}</span>
        <span>{portfolioData.tagline}</span>
      </div>
    </div>
  );
}


