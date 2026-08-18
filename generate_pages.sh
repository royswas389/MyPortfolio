#!/bin/bash

cat << 'FILE' > src/components/pages/CoverPage.tsx
import { portfolioData } from '../../data/portfolio';

export function CoverLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex flex-col">
        <span className="font-serif italic text-xl text-[#171512] opacity-60 mb-2">Hi, I am</span>
        <h1 className="font-serif text-7xl font-bold text-[#171512] leading-[0.9] tracking-tighter mb-4 uppercase">
          {portfolioData.name.split(' ')[0]}<br/>{portfolioData.name.split(' ')[1]}
        </h1>
        <div className="h-px w-24 bg-[#B58A4A] my-6"></div>
        <p className="text-[#171512] text-lg font-serif italic max-w-xs leading-relaxed opacity-80">
          {portfolioData.intro}
        </p>
      </div>
      <div className="mt-auto flex flex-col gap-8">
        <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-[#171512] opacity-60">
          <span className="cursor-pointer hover:text-[#B58A4A]">GitHub</span>
          <span className="cursor-pointer hover:text-[#B58A4A]">LinkedIn</span>
          <span className="cursor-pointer hover:text-[#B58A4A]">Email</span>
        </div>
        <div className="font-serif italic text-2xl text-[#171512] opacity-90 border-t border-black/5 pt-4">
          {portfolioData.name}
        </div>
      </div>
    </div>
  );
}

export function CoverRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-full h-72 border border-[#B58A4A]/20 bg-[#090909] relative flex items-center justify-center overflow-hidden mb-8 group">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #B58A4A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10 p-8 border border-[#B58A4A]/40 bg-[#090909]/80 backdrop-blur-sm">
            <div className="text-xs font-mono text-[#B58A4A] tracking-[0.5em] uppercase mb-2">Perspective</div>
            <div className="text-sm italic font-serif text-[#F1EBDD]/60">The Developer's Journey</div>
          </div>
        </div>
        <blockquote className="font-serif italic text-2xl text-[#171512] opacity-90 max-w-sm leading-snug">
          &ldquo;{portfolioData.quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-auto flex justify-between items-end">
        <div className="text-[10px] font-mono text-[#171512] opacity-40 uppercase">Turn the page to begin</div>
        <div className="w-8 h-8 rounded-full border border-[#B58A4A]/30 flex items-center justify-center text-[#B58A4A]">
          <span className="text-xs">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/AboutPage.tsx
import { portfolioData } from '../../data/portfolio';

export function AboutLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">02</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">About Me</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="prose prose-lg prose-p:font-sans prose-p:text-[#171512] prose-p:leading-relaxed max-w-md opacity-80">
        <p>{portfolioData.about.bio}</p>
        <p className="mt-6 italic font-serif text-xl text-[#171512] opacity-90">
          "{portfolioData.about.goals}"
        </p>
      </div>
      <div className="mt-auto border-t border-black/5 pt-8">
        <ul className="font-mono text-xs text-[#171512] space-y-2 uppercase tracking-widest opacity-60">
          <li><span className="text-[#B58A4A] w-24 inline-block opacity-100">Location:</span> {portfolioData.about.location}</li>
          <li><span className="text-[#B58A4A] w-24 inline-block opacity-100">Focus:</span> {portfolioData.about.focus}</li>
        </ul>
      </div>
    </div>
  );
}

export function AboutRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="relative w-full aspect-[4/5] bg-[#DED2BC] mb-12 shadow-inner overflow-hidden flex items-center justify-center p-4 border border-black/5">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full shadow-sm z-10"></div>
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800" alt="Workspace" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
      </div>
      <div>
        <h3 className="font-serif text-2xl text-[#171512] mb-6">Current Interests</h3>
        <div className="flex flex-wrap gap-3">
          {portfolioData.about.interests.map((interest, i) => (
            <span key={i} className="font-mono text-[10px] uppercase tracking-widest border border-black/10 px-4 py-2 text-[#171512] opacity-70 hover:opacity-100 hover:border-[#B58A4A] transition-colors cursor-default">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/SkillsPage.tsx
import { portfolioData } from '../../data/portfolio';

export function SkillsLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">03</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">Skills</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
        <div className="mb-12">
          <h3 className="font-serif italic text-xl text-[#171512] mb-6 flex items-center gap-4 opacity-80">
            Frontend
            <div className="h-[1px] flex-1 bg-black/5"></div>
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.frontend.map((skill, i) => (
              <div key={i} className="font-mono text-[10px] uppercase tracking-widest bg-[#DED2BC]/30 border border-black/5 px-3 py-1.5 text-[#171512] opacity-80">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-serif italic text-xl text-[#171512] mb-6 flex items-center gap-4 opacity-80">
            Backend
            <div className="h-[1px] flex-1 bg-black/5"></div>
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.backend.map((skill, i) => (
              <div key={i} className="font-mono text-[10px] uppercase tracking-widest bg-[#DED2BC]/30 border border-black/5 px-3 py-1.5 text-[#171512] opacity-80">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 overflow-y-auto pr-4 pt-[112px] custom-scrollbar">
        <div className="mb-12">
          <h3 className="font-serif italic text-xl text-[#171512] mb-6 flex items-center gap-4 opacity-80">
            Database
            <div className="h-[1px] flex-1 bg-black/5"></div>
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.database.map((skill, i) => (
              <div key={i} className="font-mono text-[10px] uppercase tracking-widest bg-[#090909] text-[#F1EBDD] px-3 py-1.5">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-serif italic text-xl text-[#171512] mb-6 flex items-center gap-4 opacity-80">
            Tools & DevOps
            <div className="h-[1px] flex-1 bg-black/5"></div>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.skills.tools.map((skill, i) => (
              <div key={i} className="font-sans text-sm border-l border-[#B58A4A] pl-4 py-1 text-[#171512] opacity-80">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/ExperiencePage.tsx
import { portfolioData } from '../../data/portfolio';

export function ExperienceLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">04</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">Experience</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute left-[3px] top-2 bottom-0 w-px bg-black/10"></div>
        <div className="space-y-12 pl-8">
          {portfolioData.experience.slice(0, 2).map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[35px] top-[6px] w-[5px] h-[5px] rounded-full bg-[#B58A4A] ring-4 ring-[#F1EBDD]"></div>
              <span className="font-mono text-[10px] tracking-widest text-[#B58A4A] block mb-2 uppercase">{exp.year}</span>
              <h3 className="font-serif text-2xl text-[#171512] font-bold mb-1">{exp.role}</h3>
              <h4 className="font-sans text-xs text-[#171512] opacity-60 uppercase tracking-widest mb-4">{exp.organization}</h4>
              <p className="font-sans text-sm text-[#171512] opacity-80 leading-relaxed max-w-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 relative pt-[112px]">
        <div className="absolute left-[3px] top-2 bottom-0 w-px bg-black/10"></div>
        <div className="space-y-12 pl-8">
          {portfolioData.experience.slice(2).map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[35px] top-[6px] w-[5px] h-[5px] rounded-full bg-[#B58A4A] ring-4 ring-[#F1EBDD]"></div>
              <span className="font-mono text-[10px] tracking-widest text-[#B58A4A] block mb-2 uppercase">{exp.year}</span>
              <h3 className="font-serif text-2xl text-[#171512] font-bold mb-1">{exp.role}</h3>
              <h4 className="font-sans text-xs text-[#171512] opacity-60 uppercase tracking-widest mb-4">{exp.organization}</h4>
              <p className="font-sans text-sm text-[#171512] opacity-80 leading-relaxed max-w-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/ProjectsPage.tsx
import { portfolioData } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">05</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">Projects</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="flex-1 space-y-8 overflow-y-auto pr-4 custom-scrollbar">
        {portfolioData.projects.slice(0, 2).map((project, i) => (
          <div key={project.id} className="group relative border-b border-black/5 pb-8 last:border-0 cursor-pointer" data-cursor="project">
            <span className="font-mono text-[10px] tracking-widest text-[#171512] opacity-40 block mb-2 uppercase">0{i + 1}</span>
            <h3 className="font-serif text-2xl font-bold text-[#171512] mb-2 group-hover:text-[#B58A4A] transition-colors flex justify-between items-center">
              {project.name}
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="font-sans text-[#171512] opacity-70 text-sm mb-4 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2 text-[10px] font-mono tracking-widest uppercase text-[#B58A4A]">
              {project.tech.slice(0, 3).join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 space-y-8 overflow-y-auto pr-4 pt-[112px] custom-scrollbar">
        {portfolioData.projects.slice(2).map((project, i) => (
          <div key={project.id} className="group relative border-b border-black/5 pb-8 last:border-0 cursor-pointer" data-cursor="project">
            <span className="font-mono text-[10px] tracking-widest text-[#171512] opacity-40 block mb-2 uppercase">0{i + 3}</span>
            <h3 className="font-serif text-2xl font-bold text-[#171512] mb-2 group-hover:text-[#B58A4A] transition-colors flex justify-between items-center">
              {project.name}
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </h3>
            <p className="font-sans text-[#171512] opacity-70 text-sm mb-4 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2 text-[10px] font-mono tracking-widest uppercase text-[#B58A4A]">
              {project.tech.slice(0, 3).join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/EducationPage.tsx
import { portfolioData } from '../../data/portfolio';

export function EducationLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">06</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">Education</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="flex-1">
        <div className="space-y-12">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="relative">
              <h3 className="font-serif text-2xl text-[#171512] font-bold mb-1">{edu.degree}</h3>
              <h4 className="font-sans text-xs text-[#171512] opacity-60 uppercase tracking-widest mb-2">{edu.institution}</h4>
              <span className="font-mono text-[10px] tracking-widest text-[#B58A4A] block mb-6 uppercase">{edu.year}</span>
              <div className="space-y-4">
                <p className="font-sans text-sm text-[#171512] opacity-80 leading-relaxed">
                  <strong className="font-serif italic font-normal text-[#171512] block mb-1 opacity-100">Relevant Coursework:</strong>
                  {edu.coursework}
                </p>
                <p className="font-sans text-sm text-[#171512] opacity-80 leading-relaxed">
                  <strong className="font-serif italic font-normal text-[#171512] block mb-1 opacity-100">Highlights:</strong>
                  {edu.highlights}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 pt-[112px]">
        <h3 className="font-serif text-3xl font-bold text-[#171512] mb-8">Achievements</h3>
        <div className="space-y-8">
          {portfolioData.achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-4 p-5 border border-black/5 bg-[#DED2BC]/10 transition-transform hover:-translate-y-1">
              <div className="font-mono text-[10px] text-[#B58A4A] mt-1 tracking-widest">0{i+1}</div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#171512] mb-1">{ach.title}</h4>
                <p className="font-sans text-sm text-[#171512] opacity-70 leading-relaxed">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
FILE

cat << 'FILE' > src/components/pages/ContactPage.tsx
import { portfolioData } from '../../data/portfolio';

export function ContactLeft() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="mb-12">
        <span className="font-mono text-sm text-[#B58A4A] tracking-widest block mb-2">07</span>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#171512] font-bold">Let's Connect</h2>
        <div className="h-px w-12 bg-[#B58A4A] mt-6"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-12">
          <p className="font-sans text-sm text-[#171512] opacity-80 mb-6 uppercase tracking-widest">I'm currently open to:</p>
          <ul className="space-y-3 font-serif italic text-lg text-[#171512]">
            <li>Freelance opportunities</li>
            <li>Collaborations</li>
            <li>Full-time roles</li>
            <li>Interesting projects</li>
          </ul>
        </div>
        <div className="space-y-2 font-mono text-[10px] tracking-widest uppercase">
          <a href={`mailto:${portfolioData.about.email}`} className="flex items-center justify-between p-4 border border-black/5 hover:border-[#B58A4A] transition-all text-[#171512] opacity-70 hover:opacity-100">
            <span>Email</span>
            <span className="text-[#B58A4A]">&rarr;</span>
          </a>
          <a href="#" className="flex items-center justify-between p-4 border border-black/5 hover:border-[#B58A4A] transition-all text-[#171512] opacity-70 hover:opacity-100">
            <span>LinkedIn</span>
            <span className="text-[#B58A4A]">&rarr;</span>
          </a>
          <a href="#" className="flex items-center justify-between p-4 border border-black/5 hover:border-[#B58A4A] transition-all text-[#171512] opacity-70 hover:opacity-100">
            <span>GitHub</span>
            <span className="text-[#B58A4A]">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ContactRight() {
  return (
    <div className="flex flex-col h-full relative z-10">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h2 className="font-serif text-5xl lg:text-7xl mb-8 tracking-tighter text-[#171512] font-bold">
          THE END
        </h2>
        <p className="font-sans text-sm uppercase tracking-widest text-[#171512] opacity-60 mb-12">
          Thanks for reading my story.
        </p>
        <div className="opacity-90">
          <span className="font-serif text-2xl italic text-[#171512]">Swastik Roy</span>
        </div>
      </div>
    </div>
  );
}
FILE

