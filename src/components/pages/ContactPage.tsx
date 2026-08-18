import { portfolioData } from '../../data/portfolio';
import { Mail, Linkedin, Github, Sparkles } from 'lucide-react';

export function ContactLeft() {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between">
      <div>
        <div className="mb-4">
          <span className="font-mono text-[10px] text-[#B58A4A] tracking-widest block mb-1">07 // LET'S BUILD</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#171512] font-bold leading-tight uppercase">
            {portfolioData.contact.heading}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#171512] opacity-80 mt-1">
            "{portfolioData.contact.subheading}"
          </p>
          <div className="h-px w-10 bg-[#B58A4A] mt-2"></div>
        </div>

        <div className="mb-4">
          <p className="font-mono text-[9px] text-[#171512] opacity-75 mb-2 uppercase tracking-wider font-semibold">
            I'M CURRENTLY OPEN TO:
          </p>
          <ul className="space-y-1 font-serif italic text-xs sm:text-sm text-[#171512] opacity-90">
            {portfolioData.contact.openTo.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="text-[#B58A4A] text-xs">✦</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 font-mono text-[9px] tracking-wider uppercase">
          <a
            href={`mailto:${portfolioData.social.email}`}
            className="flex items-center justify-between p-2.5 border border-black/10 hover:border-[#B58A4A] bg-[#171512] text-[#F1EBDD] hover:bg-[#B58A4A] hover:text-[#090909] transition-all rounded-[2px] font-bold"
          >
            <span className="flex items-center gap-2">
              <Mail size={13} /> EMAIL ME
            </span>
            <span>&rarr;</span>
          </a>

          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 border border-black/10 hover:border-[#B58A4A] transition-all text-[#171512] opacity-85 hover:opacity-100 bg-[#DED2BC]/25 rounded-[2px]"
          >
            <span className="flex items-center gap-2">
              <Linkedin size={13} /> LINKEDIN
            </span>
            <span>↗</span>
          </a>

          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 border border-black/10 hover:border-[#B58A4A] transition-all text-[#171512] opacity-85 hover:opacity-100 bg-[#DED2BC]/25 rounded-[2px]"
          >
            <span className="flex items-center gap-2">
              <Github size={13} /> GITHUB
            </span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-40 uppercase">
        <span>QUICK RECRUITER REACHOUT</span>
        <span>ONE-CLICK RESPONSE</span>
      </div>
    </div>
  );
}

export function ContactRight() {
  return (
    <div className="flex flex-col h-full relative z-10 justify-between items-center text-center py-4">
      <div className="my-auto flex flex-col items-center max-w-xs">
        <div className="w-10 h-10 rounded-full border border-[#B58A4A]/40 flex items-center justify-center text-[#B58A4A] mb-3 bg-[#090909]">
          <Sparkles size={16} />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl mb-2 tracking-tighter text-[#171512] font-bold">
          THE END.
        </h2>

        <p className="font-mono text-[9px] uppercase tracking-widest text-[#B58A4A] font-semibold mb-2">
          {portfolioData.footer.tagline}
        </p>

        <p className="font-serif italic text-xs sm:text-sm text-[#171512] opacity-75 mb-5 leading-relaxed">
          "{portfolioData.footer.closing}"
        </p>

        <div className="p-3 bg-[#DED2BC]/30 border border-black/5 rounded-[2px] w-full text-center">
          <span className="font-serif text-lg italic text-[#171512] block">
            {portfolioData.name}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#171512] opacity-50 block mt-0.5">
            {portfolioData.role}
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-black/5 w-full flex justify-between items-center text-[8px] font-mono text-[#171512] opacity-50 uppercase">
        <span>{portfolioData.footer.copyright}</span>
        <div className="flex gap-2">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#B58A4A]">GitHub</a> · 
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#B58A4A]">LinkedIn</a> · 
          <a href={`mailto:${portfolioData.social.email}`} className="hover:text-[#B58A4A]">Email</a>
        </div>
      </div>
    </div>
  );
}


