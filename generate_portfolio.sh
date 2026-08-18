#!/bin/bash

mkdir -p src/components/Book src/components/pages src/components/UI src/data src/hooks src/utils

cat << 'FILE' > src/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
FILE

cat << 'FILE' > src/data/portfolio.ts
export const portfolioData = {
  name: "Swastik Roy",
  role: "Full Stack Developer",
  intro: "I build digital experiences that are fast, accessible, and meaningful.",
  quote: "Code is not just what I write. It's how I solve problems.",
  about: {
    bio: "I am a passionate software engineer focusing on building scalable, performant, and beautiful web applications. With a strong eye for design and a deep understanding of full-stack architecture, I bridge the gap between aesthetics and engineering.",
    location: "Global",
    email: "royswastik389@gmail.com",
    focus: "Full Stack Web Development",
    interests: ["Interactive Web Design", "Cloud Architecture", "Generative AI", "Performance Optimization"],
    goals: "To build software that empowers people and feels magical to use."
  },
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    backend: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "Go"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
    tools: ["Git", "GitHub", "Docker", "VS Code", "Figma", "AWS", "Vercel"]
  },
  experience: [
    {
      year: "2024 — Present",
      role: "Senior Frontend Engineer",
      organization: "Tech Innovators Inc.",
      description: "Leading the frontend architecture for scalable web platforms. Implementing micro-frontends and reducing initial load time by 40%.",
    },
    {
      year: "2022 — 2024",
      role: "Full Stack Developer",
      organization: "Creative Solutions Agency",
      description: "Developed and maintained multiple client projects from e-commerce to custom CMS. Built robust RESTful APIs and modern React frontends.",
    },
    {
      year: "2021 — 2022",
      role: "Web Developer Intern",
      organization: "Digital Horizons",
      description: "Collaborated with designers to implement responsive layouts and interactive features using vanilla JavaScript and CSS.",
    }
  ],
  projects: [
    {
      id: "project-1",
      name: "TaskFlow",
      description: "A productivity platform designed to help users manage tasks efficiently with real-time collaboration and intelligent scheduling.",
      problem: "Traditional task managers feel cluttered and fail to adapt to fluid workflows.",
      idea: "Create a spatial, node-based task interface that allows users to map their thoughts and tasks visually.",
      solution: "Developed a canvas-based React application using WebSockets for real-time collaboration.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800"
    },
    {
      id: "project-2",
      name: "Aura Commerce",
      description: "An elegant, headless e-commerce storefront providing lightning-fast checkout and seamless product discovery.",
      problem: "E-commerce sites often suffer from poor performance and generic templates.",
      idea: "Build a headless architecture separating the presentation layer from the e-commerce engine.",
      solution: "Implemented Next.js with static site generation for ultra-fast page loads, backed by a robust CMS.",
      tech: ["Next.js", "Tailwind CSS", "Shopify API", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
    },
    {
      id: "project-3",
      name: "DevChronicle",
      description: "A digital journaling and documentation tool specifically designed for developers to log their coding journey.",
      problem: "Developers struggle to keep their learning and coding milestones organized in one place.",
      idea: "A markdown-first journal with integrated code snippet execution.",
      solution: "Created an Electron-based desktop application with local encryption and cloud sync.",
      tech: ["React", "Electron", "TypeScript", "Markdown"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      year: "2018 — 2022",
      coursework: "Data Structures, Algorithms, Web Architecture, Human-Computer Interaction",
      highlights: "Graduated with Honors. Led the University Web Development Club."
    }
  ],
  achievements: [
    {
      title: "1st Place at Global Web Hackathon 2023",
      description: "Built an accessibility-first educational platform in 48 hours."
    },
    {
      title: "AWS Certified Solutions Architect",
      description: "Demonstrated expertise in designing distributed systems on AWS."
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to major React UI libraries and tools."
    }
  ]
};
FILE

cat << 'FILE' > src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}
FILE

cat << 'FILE' > src/components/UI/LoadingScreen.tsx
import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909] text-[#F1EBDD]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.p
          className="font-mono text-sm tracking-widest text-[#B58A4A] mb-4 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Opening
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-serif tracking-wide mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          SWASTIK ROY
        </motion.h1>
        <motion.p
          className="text-sm md:text-base font-sans tracking-widest leading-loose max-w-xs mx-auto text-[#746D60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A DIGITAL STORY<br />OF CODE, CREATION<br />& CURIOSITY
        </motion.p>
      </div>
    </motion.div>
  );
}
FILE

cat << 'FILE' > src/components/UI/Cursor.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="turn"]')) {
        setLabel('↔ Turn Page');
      } else if (target.closest('[data-cursor="project"]')) {
        setLabel('View Project ↗');
      } else if (target.closest('a') || target.closest('button')) {
        setLabel(''); // just small dot
      } else {
        setLabel(null);
      }
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div
          className={`rounded-full bg-[#F1EBDD] flex items-center justify-center whitespace-nowrap transition-all duration-300 ${
            label !== null ? (label === '' ? 'w-4 h-4' : 'px-4 py-2 text-xs font-mono text-[#090909]') : 'w-2 h-2'
          }`}
        >
          {label !== null && label !== '' && label}
        </div>
      </div>
    </motion.div>
  );
}
FILE

