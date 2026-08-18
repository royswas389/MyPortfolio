import { useState } from 'react';
import { portfolioData, ProjectCaseStudy } from '../../data/portfolio';
import { ExternalLink, Github, Sparkles, X, ChevronRight } from 'lucide-react';

export function ProjectsLeft({ onSelectProject }: { onSelectProject?: (proj: ProjectCaseStudy) => void }) {
  const [selected, setSelected] = useState<ProjectCaseStudy | null>(null);

  const projects = portfolioData.projects.slice(0, 2);

  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div>
        <div className="mb-3">
          <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">04 // SELECTED BUILDS</span>
          <h2 className="text-xl sm:text-2xl font-serif text-[#171512] font-bold uppercase leading-tight">
            Things I've Actually Built.
          </h2>
          <p className="font-serif italic text-xs text-[#171512] opacity-75 mt-0.5">
            "Tutorials taught me how things work. Building taught me why they break."
          </p>
          <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
        </div>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => {
                setSelected(project);
                onSelectProject?.(project);
              }}
              className="p-3 border border-black/10 hover:border-[#B58A4A] bg-[#DED2BC]/20 hover:bg-[#DED2BC]/40 transition-all rounded-[2px] cursor-pointer group"
              data-cursor="project"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[8px] bg-[#171512] text-[#F1EBDD] px-2 py-0.5 tracking-wider uppercase rounded-[2px] font-semibold">
                  {project.tag}
                </span>
                <span className="font-mono text-[9px] text-[#B58A4A]">0{i + 1}</span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-[#171512] group-hover:text-[#B58A4A] transition-colors flex items-center justify-between">
                {project.name}
                <ChevronRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#B58A4A]" />
              </h3>

              <p className="font-sans text-xs text-[#171512] opacity-80 leading-relaxed mb-2 line-clamp-2">
                {project.tagline}
              </p>

              {/* Case study mini teaser */}
              <div className="text-[10px] font-sans bg-[#F1EBDD]/80 p-2 rounded-[2px] border border-black/5 mb-2">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#B58A4A] font-bold block">The Hard Part:</span>
                <span className="text-[#171512] opacity-85 line-clamp-1">{project.hardPart}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex gap-1.5 text-[8px] font-mono tracking-wider uppercase text-[#171512] opacity-65">
                  {project.tech.slice(0, 3).join(' · ')}
                </div>
                <span className="text-[8px] font-mono text-[#B58A4A] uppercase tracking-widest font-semibold group-hover:underline">
                  Read The Build &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>MINIATURE CASE STUDIES</span>
        <span>CLICK TO INSPECT ARCHITECTURE</span>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export function ProjectsRight({ onSelectProject }: { onSelectProject?: (proj: ProjectCaseStudy) => void }) {
  const [selected, setSelected] = useState<ProjectCaseStudy | null>(null);

  const projects = portfolioData.projects.slice(2, 4);

  return (
    <div className="flex flex-col h-full relative z-10 justify-between pt-1">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-[#B58A4A] uppercase tracking-widest font-semibold">
            CONTINUED BUILDS
          </span>
          <span className="text-[8px] font-mono text-[#171512] opacity-50 uppercase">REAL PROBLEMS SOLVED</span>
        </div>

        <div className="space-y-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => {
                setSelected(project);
                onSelectProject?.(project);
              }}
              className="p-3 border border-black/10 hover:border-[#B58A4A] bg-[#DED2BC]/20 hover:bg-[#DED2BC]/40 transition-all rounded-[2px] cursor-pointer group"
              data-cursor="project"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[8px] bg-[#171512] text-[#F1EBDD] px-2 py-0.5 tracking-wider uppercase rounded-[2px] font-semibold">
                  {project.tag}
                </span>
                <span className="font-mono text-[9px] text-[#B58A4A]">0{i + 3}</span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-[#171512] group-hover:text-[#B58A4A] transition-colors flex items-center justify-between">
                {project.name}
                <ChevronRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#B58A4A]" />
              </h3>

              <p className="font-sans text-xs text-[#171512] opacity-80 leading-relaxed mb-2 line-clamp-2">
                {project.tagline}
              </p>

              {/* Case study mini teaser */}
              <div className="text-[10px] font-sans bg-[#F1EBDD]/80 p-2 rounded-[2px] border border-black/5 mb-2">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#B58A4A] font-bold block">The Hard Part:</span>
                <span className="text-[#171512] opacity-85 line-clamp-1">{project.hardPart}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex gap-1.5 text-[8px] font-mono tracking-wider uppercase text-[#171512] opacity-65">
                  {project.tech.slice(0, 3).join(' · ')}
                </div>
                <span className="text-[8px] font-mono text-[#B58A4A] uppercase tracking-widest font-semibold group-hover:underline">
                  Read The Build &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>SOURCE AVAILABLE ON GITHUB</span>
        <span>{portfolioData.tagline}</span>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectCaseStudy; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-text">
      <div className="relative w-full max-w-xl bg-[#F1EBDD] text-[#171512] p-6 sm:p-8 rounded-sm shadow-2xl border border-[#B58A4A]/40 max-h-[90vh] overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#171512] opacity-60 hover:opacity-100 hover:text-[#B58A4A] transition-colors rounded-full cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[9px] bg-[#171512] text-[#F1EBDD] px-2 py-0.5 uppercase tracking-wider font-semibold rounded-[2px]">
            {project.tag}
          </span>
          <span className="font-mono text-[9px] text-[#B58A4A] tracking-wider uppercase">Engineering Case Study</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase mb-1">{project.name}</h2>
        <p className="font-sans text-xs sm:text-sm text-[#171512] opacity-75 mb-5">{project.tagline}</p>

        <div className="space-y-3.5 text-xs sm:text-[13px] font-sans">
          <div className="p-3 bg-[#DED2BC]/30 border-l-2 border-[#171512] rounded-r-[2px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#171512] font-bold block mb-0.5">THE PROBLEM</span>
            <p className="opacity-90 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-3 bg-[#DED2BC]/30 border-l-2 border-[#B58A4A] rounded-r-[2px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#B58A4A] font-bold block mb-0.5">THE IDEA</span>
            <p className="opacity-90 leading-relaxed">{project.idea}</p>
          </div>

          <div className="p-3 bg-[#DED2BC]/30 border-l-2 border-black/40 rounded-r-[2px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#171512] font-bold block mb-0.5">THE BUILD</span>
            <p className="opacity-90 leading-relaxed">{project.build}</p>
          </div>

          <div className="p-3 bg-amber-500/10 border-l-2 border-amber-600 rounded-r-[2px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-amber-700 font-bold block mb-0.5">THE HARD PART</span>
            <p className="opacity-90 leading-relaxed">{project.hardPart}</p>
          </div>

          <div className="p-3 bg-emerald-500/10 border-l-2 border-emerald-600 rounded-r-[2px]">
            <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 font-bold block mb-0.5">WHAT I LEARNED</span>
            <p className="opacity-90 leading-relaxed">{project.learned}</p>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mt-5 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span key={idx} className="font-mono text-[9px] uppercase tracking-wider bg-[#171512] text-[#F1EBDD] px-2 py-0.5 rounded-[2px]">
                {t}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={project.demo || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-[#B58A4A] text-[#090909] font-mono text-[9px] uppercase tracking-wider font-bold hover:bg-[#171512] hover:text-[#F1EBDD] transition-colors rounded-[2px]"
            >
              Try It <Sparkles size={11} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 border border-black/20 text-[#171512] font-mono text-[9px] uppercase tracking-wider hover:border-[#171512] transition-colors rounded-[2px]"
            >
              View Source <Github size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


