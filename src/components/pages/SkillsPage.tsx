import { portfolioData } from '../../data/portfolio';

export function SkillsLeft() {
  const { buildingWith, exploring } = portfolioData.skillsGrouped;

  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div>
        <div className="mb-4">
          <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">03 // STACK & CAPABILITIES</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#171512] font-bold uppercase">
            Tools I Speak
          </h2>
          <p className="font-serif italic text-xs text-[#171512] opacity-75 mt-1">
            "{portfolioData.about.philosophy}"
          </p>
          <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
        </div>

        <div className="space-y-4">
          {/* Building With */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-[#171512] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                {buildingWith.label}
              </h3>
              <span className="text-[8px] font-mono text-[#171512] opacity-50 uppercase">{buildingWith.desc}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {buildingWith.items.map((skill, i) => (
                <div key={i} className="font-mono text-[9px] uppercase tracking-wider bg-[#171512] text-[#F1EBDD] px-2.5 py-1 rounded-[2px] shadow-xs">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Exploring */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-[#171512] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58A4A]"></span>
                {exploring.label}
              </h3>
              <span className="text-[8px] font-mono text-[#171512] opacity-50 uppercase">{exploring.desc}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exploring.items.map((skill, i) => (
                <div key={i} className="font-mono text-[9px] uppercase tracking-wider bg-[#DED2BC]/50 border border-black/10 px-2 py-1 text-[#171512] opacity-90 rounded-[2px]">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>ACTIVE ENGINEERING STACK</span>
        <span>{portfolioData.tagline}</span>
      </div>
    </div>
  );
}

export function SkillsRight() {
  const { curiousAbout } = portfolioData.skillsGrouped;

  return (
    <div className="flex flex-col h-full relative z-10 justify-between pt-1">
      <div className="space-y-4">
        {/* Curious About */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-[#171512] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#171512]/40"></span>
              {curiousAbout.label}
            </h3>
            <span className="text-[8px] font-mono text-[#171512] opacity-50 uppercase">{curiousAbout.desc}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {curiousAbout.items.map((skill, i) => (
              <div key={i} className="font-mono text-[9px] uppercase tracking-wider border border-dashed border-black/25 px-2 py-0.5 text-[#171512] opacity-75 rounded-[2px]">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Developer Mindset Card */}
        <div className="p-3.5 bg-[#090909] text-[#F1EBDD] rounded-[2px] border border-[#B58A4A]/25">
          <div className="text-[8px] font-mono text-[#B58A4A] tracking-widest uppercase mb-1">
            HOW I LEARN TOOLS
          </div>
          <p className="font-serif italic text-xs leading-relaxed opacity-90 mb-2">
            "I don't memorize syntax checklists. I pick a real problem, build an MVP until it breaks, profile the bottleneck, and adopt the right abstraction."
          </p>
          <div className="flex items-center gap-2 text-[8px] font-mono text-[#F1EBDD]/60 uppercase tracking-widest">
            <span>PROTOTYPE</span> → <span>STRESS TEST</span> → <span>OPTIMIZE</span>
          </div>
        </div>

        {/* Learning Focus Checklist */}
        <div>
          <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#B58A4A] font-semibold mb-2">
            CORE PRINCIPLES I VALUE
          </h4>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="font-sans text-[11px] border-l-2 border-[#B58A4A] pl-2 py-0.5 text-[#171512] opacity-85">
              Type Safety & Contracts
            </div>
            <div className="font-sans text-[11px] border-l-2 border-[#B58A4A] pl-2 py-0.5 text-[#171512] opacity-85">
              State & Cache Invalidation
            </div>
            <div className="font-sans text-[11px] border-l-2 border-[#B58A4A] pl-2 py-0.5 text-[#171512] opacity-85">
              Secure Auth & OWASP Top 10
            </div>
            <div className="font-sans text-[11px] border-l-2 border-[#B58A4A] pl-2 py-0.5 text-[#171512] opacity-85">
              Responsive 60fps Micro-interactions
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 text-[8px] font-mono text-[#171512] opacity-40 uppercase text-right">
        <span>CONTINUOUS EVOLUTION</span>
      </div>
    </div>
  );
}


