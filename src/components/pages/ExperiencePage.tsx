import { portfolioData } from '../../data/portfolio';
import { Terminal, GitCommit } from 'lucide-react';

export function ExperienceLeft() {
  const entries = portfolioData.buildLog.entries.slice(0, 2);

  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div>
        <div className="mb-4">
          <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">05 // CHRONICLES</span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#171512] font-bold uppercase leading-tight">
            {portfolioData.buildLog.title}
          </h2>
          <p className="font-serif italic text-xs text-[#171512] opacity-75 mt-0.5">
            "{portfolioData.buildLog.intro}"
          </p>
          <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
        </div>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-black/10"></div>
          <div className="space-y-4 pl-6">
            {entries.map((entry, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[23px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#171512] flex items-center justify-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-[#B58A4A]"></div>
                </div>

                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[9px] tracking-widest text-[#B58A4A] uppercase font-bold">
                    {entry.date}
                  </span>
                  <span className="font-mono text-[8px] bg-black/5 px-1.5 py-0.2 rounded text-[#171512] opacity-70 uppercase">
                    {entry.tag}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#171512] leading-tight mb-1">
                  {entry.title}
                </h3>

                <p className="font-sans text-xs text-[#171512] opacity-80 leading-relaxed max-w-sm">
                  {entry.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>LEARNING IN PUBLIC</span>
        <span>EXPERIMENTATION OVER RESUME HYPE</span>
      </div>
    </div>
  );
}

export function ExperienceRight() {
  const entries = portfolioData.buildLog.entries.slice(2);

  return (
    <div className="flex flex-col h-full relative z-10 justify-between pt-1">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] text-[#B58A4A] uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Terminal size={12} /> CONTINUED LOGS
          </span>
          <span className="text-[8px] font-mono text-[#171512] opacity-50 uppercase">REAL MILESTONES</span>
        </div>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-black/10"></div>
          <div className="space-y-4 pl-6">
            {entries.map((entry, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[23px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#171512] flex items-center justify-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-[#B58A4A]"></div>
                </div>

                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[9px] tracking-widest text-[#B58A4A] uppercase font-bold">
                    {entry.date}
                  </span>
                  <span className="font-mono text-[8px] bg-black/5 px-1.5 py-0.2 rounded text-[#171512] opacity-70 uppercase">
                    {entry.tag}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#171512] leading-tight mb-1">
                  {entry.title}
                </h3>

                <p className="font-sans text-xs text-[#171512] opacity-80 leading-relaxed max-w-sm">
                  {entry.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Git commit quote */}
        <div className="mt-4 p-3 bg-[#090909] text-[#F1EBDD] rounded-[2px] border border-[#B58A4A]/25">
          <div className="flex items-center gap-1.5 text-[8px] font-mono text-[#B58A4A] tracking-widest uppercase mb-1">
            <GitCommit size={11} /> DAILY COMMITS & EVOLUTION
          </div>
          <p className="font-serif italic text-xs opacity-90 leading-snug">
            "The best way to judge a developer's trajectory isn't how long they've held a title — it's the velocity of their commits and the complexity of what they build when nobody is telling them what to do."
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>{portfolioData.tagline}</span>
        <span>SWAS.LOGS</span>
      </div>
    </div>
  );
}


