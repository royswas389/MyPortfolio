import { portfolioData, LabItem } from '../../data/portfolio';
import { FlaskConical, AlertTriangle } from 'lucide-react';

export function EducationLeft() {
  const { experiments } = portfolioData.lab;

  const getStatusBadge = (status: LabItem['status']) => {
    switch (status) {
      case 'WORKING':
        return 'bg-emerald-700 text-white';
      case 'EXPERIMENTAL':
        return 'bg-amber-600 text-white';
      case 'BROKEN':
        return 'bg-rose-700 text-white';
      case 'LEARNING':
        return 'bg-blue-600 text-white';
      case 'ABANDONED':
        return 'bg-stone-500 text-white';
      default:
        return 'bg-black/20 text-[#171512]';
    }
  };

  return (
    <div className="flex flex-col h-full relative z-10 min-h-0">
      <div className="mb-3 shrink-0">
        <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">06 // EXPERIMENTS</span>
        <h2 className="text-xl sm:text-2xl font-serif text-[#171512] font-bold uppercase leading-tight flex items-center gap-2">
          {portfolioData.lab.title} <FlaskConical size={18} className="text-[#B58A4A]" />
        </h2>
        <p className="font-serif italic text-xs text-[#171512] opacity-75 mt-0.5">
          "{portfolioData.lab.subtitle}"
        </p>
        <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-2.5 pr-1">
        {experiments.map((item) => (
          <div key={item.id} className="p-2.5 bg-[#DED2BC]/25 border border-black/5 rounded-[2px] hover:border-[#B58A4A] transition-colors">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-serif text-xs sm:text-sm font-bold text-[#171512] leading-tight">
                {item.title}
              </span>
              <span className={`font-mono text-[7.5px] font-bold px-1.5 py-0.2 uppercase tracking-wider rounded-[2px] shrink-0 ${getStatusBadge(item.status)}`}>
                {item.status}
              </span>
            </div>

            <p className="font-sans text-[11px] text-[#171512] opacity-80 leading-snug mb-1.5">
              {item.description}
            </p>

            <div className="flex items-center justify-between text-[8px] font-mono">
              <span className="text-[#B58A4A] uppercase tracking-wider">{item.category}</span>
              <span className="text-[#171512] opacity-60 italic">{item.takeaway}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 mt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase shrink-0">
        <span>ENGINEER'S PLAYGROUND</span>
        <span>{portfolioData.tagline}</span>
      </div>
    </div>
  );
}

export function EducationRight() {
  const { items } = portfolioData.thingsThatBroke;

  return (
    <div className="flex flex-col h-full relative z-10 min-h-0 pt-1">
      <div className="mb-3 shrink-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[10px] text-amber-700 tracking-widest uppercase font-semibold flex items-center gap-1.5">
            <AlertTriangle size={13} /> FAILURES & LESSONS
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif text-[#171512] font-bold uppercase leading-tight">
          {portfolioData.thingsThatBroke.title}
        </h2>
        <p className="font-serif italic text-xs text-[#171512] opacity-75 mt-0.5">
          "{portfolioData.thingsThatBroke.intro}"
        </p>
        <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-1">
        {items.map((item, i) => (
          <div key={i} className="p-3 border border-black/10 bg-[#090909] text-[#F1EBDD] rounded-[2px]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[8px] text-rose-400 uppercase tracking-widest font-bold">
                THE PROBLEM
              </span>
              <span className="font-mono text-[8px] text-[#B58A4A] uppercase tracking-wider">
                {item.context}
              </span>
            </div>
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#F1EBDD] mb-1.5">
              {item.problem}
            </h4>
            <div className="pt-1.5 border-t border-white/10">
              <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest font-bold block mb-0.5">
                THE LESSON
              </span>
              <p className="font-sans text-[11px] text-[#F1EBDD]/80 leading-relaxed">
                {item.lesson}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 mt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase shrink-0">
        <span>AUTHENTIC ENGINEERING POST-MORTEMS</span>
        <span>DEBUG → LEARN</span>
      </div>
    </div>
  );
}


