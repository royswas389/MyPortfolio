export interface ProjectCaseStudy {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  problem: string;
  idea: string;
  build: string;
  hardPart: string;
  learned: string;
  tech: string[];
  github: string;
  demo?: string;
  isLab?: boolean;
  status?: 'WORKING' | 'EXPERIMENTAL' | 'BROKEN' | 'LEARNING' | 'ABANDONED';
}

export interface BuildLogItem {
  date: string;
  title: string;
  note: string;
  tag: string;
}

export interface LabItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'WORKING' | 'EXPERIMENTAL' | 'BROKEN' | 'LEARNING' | 'ABANDONED';
  tech: string[];
  takeaway: string;
}

export interface BrokenItem {
  problem: string;
  lesson: string;
  context: string;
}

export const portfolioData = {
  name: "Swastik Roy",
  role: "Developer · Builder · Experimenter",
  status: "CURRENTLY BUILDING → something new",
  tagline: "BUILD → BREAK → LEARN → SHIP → REPEAT",

  hero: {
    badge: "EDITION 2026",
    headlineTop: "Swastik Roy",
    headlineBottom: "I DON'T HAVE YEARS OF EXPERIENCE. I HAVE THINGS I'VE BUILT.",

    supporting: "Developer. Builder. Experimenter.",
    description: "I turn curious ideas into working software — exploring AI, web development, cybersecurity and everything interesting in between.",
    statusIndicator: "CURRENTLY BUILDING → something new",
    primaryCta: "See What I've Built",
    secondaryCta: "Open My GitHub"
  },

  social: {
    github: "https://github.com/royswas389",
    linkedin: "https://www.linkedin.com/in/swastik-roy-59974a28a/",
    email: "royswastik389@gmail.com"
  },

  about: {
    title: "A LITTLE ABOUT THE PERSON BEHIND THE BUILDS.",
    paragraphs: [
      "I'm a developer who learns by building.",
      "I started with tutorials. Then I started breaking things. Then I started figuring out why they broke.",
      "These days, I'm exploring the intersection of software engineering, AI and cybersecurity — one experiment at a time.",
      "I'm still early in the journey. That's exactly what makes it interesting."
    ],
    philosophy: "I don't collect technologies. I collect problems worth solving with them.",
    location: "Global / Remote",
    focus: "Full-Stack Web & AI Engineering"
  },

  noExperienceSection: {
    title: "NO JOB TITLE YET.",
    subtitle: "STILL GOT WORK TO SHOW.",
    copy: "I don't have a long list of companies on my résumé yet. What I do have is a growing collection of things I've designed, coded, deployed, broken, fixed and learned from.",
    cta: "JUDGE THE WORK →"
  },

  skillsGrouped: {
    buildingWith: {
      label: "BUILDING WITH",
      desc: "Technologies I actively use to ship software.",
      items: ["TypeScript", "React / Next.js", "Node.js & Express", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Git / GitHub", "REST APIs"]
    },
    exploring: {
      label: "EXPLORING",
      desc: "Technologies I'm currently figuring out",
      items: ["Generative AI / LLM APIs", "Python & PyTorch Basics", "Web Security & Auth", "Docker & Containers", "Vector Databases & RAG"]
    },
    curiousAbout: {
      label: "CURIOUS ABOUT",
      desc: "Technologies I want to explore next.",
      items: ["Reverse Engineering", "Distributed Systems", "Rust", "Computer Vision", "eBPF / Low-level Linux"]
    }
  },

  learningAreas: {
    title: "CURRENTLY FIGURING OUT",
    subtext: "The stack changes. The curiosity doesn't.",
    topics: [
      { name: "AI / ML & LLM Orchestration", note: "Prompt engineering, function calling & RAG architectures" },
      { name: "Web Application Security", note: "OWASP vulnerabilities, secure auth patterns & threat modeling" },
      { name: "Distributed Systems & Cloud", note: "Designing for fault tolerance, caching & data pipelines" },
      { name: "Advanced Software Architecture", note: "Micro-frontends, state synchronization & clean abstractions" }
    ]
  },

  buildLog: {
    title: "THE BUILD LOG",
    intro: "Some ideas become products. Some become bugs. Both teach me something.",
    entries: [
      {
        date: "AUG 2026",
        title: "DIGITAL BOOK PORTFOLIO",
        tag: "UI / CREATIVE TECH",
        note: "Tried to make a portfolio that doesn't look like every other portfolio on the internet. Built custom 3D page flip physics and typography layout."
      },
      {
        date: "JUL 2026",
        title: "PAPERBUS — GAME STUDY APP",
        tag: "FULL-STACK / AI",
        note: "Started with an idea: what if studying felt more like playing a game? Engineered spaced repetition mechanics into an interactive canvas."
      },
      {
        date: "JUN 2026",
        title: "AURA HEADLESS STOREFRONT",
        tag: "PERFORMANCE",
        note: "Wanted to see how fast an e-commerce catalog could feel. Decoupled frontend rendering from cart state to hit instant transitions."
      },
      {
        date: "MAY 2026",
        title: "DEVCHRONICLE DESKTOP JOURNAL",
        tag: "DESKTOP / LOCAL-FIRST",
        note: "Built an encrypted markdown workspace with live sandbox evaluation so I could document architectural decisions as I code."
      }
    ]
  },

  lab: {
    title: "THE LAB",
    subtitle: "Not everything here works. That's the point.",
    experiments: [
      {
        id: "lab-1",
        title: "Semantic Vector Search on Local Notes",
        category: "AI / RAG",
        description: "Embedded 500+ personal markdown files using local embeddings to test semantic memory recall.",
        status: "WORKING",
        tech: ["Python", "ChromaDB", "FastAPI"],
        takeaway: "Chunking strategy matters 10x more than model parameter size."
      },
      {
        id: "lab-2",
        title: "Custom JWT Auth with Refresh Token Rotation",
        category: "SECURITY",
        description: "Implemented secure HTTP-only cookie auth flow with redis-backed blacklisting to prevent replay attacks.",
        status: "WORKING",
        tech: ["Node.js", "Redis", "Crypto"],
        takeaway: "Handling race conditions during concurrent token refreshes was a huge technical hurdle."
      },
      {
        id: "lab-3",
        title: "Real-time Multi-cursor Canvas",
        category: "NETWORKING",
        description: "Built collaborative spatial workspace with WebSocket delta compression and optimistic UI updates.",
        status: "EXPERIMENTAL",
        tech: ["WebSockets", "React", "Canvas API"],
        takeaway: "Conflict resolution is tricky without CRDTs once latency exceeds 150ms."
      },
      {
        id: "lab-4",
        title: "Automated Vulnerability Scanner for Repo Dependencies",
        category: "SECURITY",
        description: "CLI tool parsing lockfiles to correlate known CVE databases without third-party telemetry.",
        status: "LEARNING",
        tech: ["TypeScript", "OSV API", "CLI"],
        takeaway: "Parsing dependency trees with circular peer references requires robust graph traversal."
      }
    ]
  },

  thingsThatBroke: {
    title: "THINGS THAT BROKE",
    intro: "A perfect GitHub repository usually hides the interesting part.",
    items: [
      {
        problem: "Production 3D Flip Layout Collapsed on Mobile WebKit",
        lesson: "CSS 3D transforms (`transform-style: preserve-3d`) behave inconsistently across Safari GPU layers unless hardware acceleration is explicitly isolated.",
        context: "Book Portfolio Engine"
      },
      {
        problem: "Token Desynchronization Under Heavy Fast Clicks",
        lesson: "Understanding race conditions in asynchronous token refresh pipelines matters infinitely more than blindly wrapping calls in try-catch.",
        context: "Custom Auth Service"
      },
      {
        problem: "WebSocket Memory Leak on Rapid Client Reconnects",
        lesson: "Always decouple heartbeat listeners and cleanly dispose event handlers when socket connections drop unexpectedly.",
        context: "Collaborative Canvas"
      }
    ]
  },

  projects: [
    {
      id: "project-1",
      name: "TaskFlow",
      tag: "PROBLEM → SOLUTION",
      tagline: "Spatial, node-based task interface with real-time sync.",
      problem: "Traditional task managers feel cluttered and fail to adapt to non-linear thought processes.",
      idea: "What if you could map tasks spatially like mind nodes rather than endless linear checklists?",
      build: "Engineered a canvas-driven React app with WebSocket sync, drag-and-drop hierarchy, and subtask dependencies.",
      hardPart: "Preventing render thrashing when calculating node layout vectors on high-frequency drag events.",
      learned: "Learned how to decouple rendering cycles from canvas physics state using requestAnimationFrame.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
      github: "https://github.com/royswas389",
      demo: "https://github.com/royswas389"
    },
    {
      id: "project-2",
      name: "Aura Commerce",
      tag: "BUILT FROM SCRATCH",
      tagline: "Ultra-fast headless storefront with optimistic navigation.",
      problem: "Standard e-commerce storefronts suffer from heavy hydration lags and sluggish category filters.",
      idea: "Separate presentation completely from commerce engines to achieve sub-100ms page transitions.",
      build: "Built static generation workflows in Next.js paired with dynamic cart states and predictive prefetching.",
      hardPart: "Coordinating optimistic cart updates with asynchronous inventory reservation checks without glitchy UI rollback.",
      learned: "Mastered optimistic UI patterns and cache invalidation strategies across static edge pages.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify API", "Framer Motion"],
      github: "https://github.com/royswas389",
      demo: "https://github.com/royswas389"
    },
    {
      id: "project-3",
      name: "DevChronicle",
      tag: "WEEKEND BUILD",
      tagline: "Local-first encrypted developer log & live code sandbox.",
      problem: "Developers struggle to document raw architectural thoughts alongside runnable verification snippets.",
      idea: "A markdown-first workstation with instant code snippet evaluation and local AES encryption.",
      build: "Developed an Electron app with filesystem watchers, local SQLite storage, and sandboxed runner.",
      hardPart: "Safely isolating code execution in the runner to prevent arbitrary system execution while maintaining snappy feedback.",
      learned: "Deepened my understanding of IPC communication, process sandboxing, and local-first data architectures.",
      tech: ["Electron", "React", "TypeScript", "Tailwind CSS", "SQLite"],
      github: "https://github.com/royswas389",
      demo: "https://github.com/royswas389"
    },
    {
      id: "project-4",
      name: "PaperBus",
      tag: "AI EXPERIMENT",
      tagline: "Turn complex topics into interactive gamified study quests.",
      problem: "Passive reading of dense technical docs leads to low retention and fatigue.",
      idea: "Transform syllabus material into progressive knowledge quests with automated active recall prompts.",
      build: "Integrated LLM-based concept breakdown with spaced repetition queues and active quiz generation.",
      hardPart: "Crafting deterministic prompt constraints so generated quizzes stay factually grounded in the source text.",
      learned: "Gained hands-on experience structuring structured outputs and schema validations with LLM APIs.",
      tech: ["React", "FastAPI", "Python", "OpenAI / Gemini API", "Tailwind CSS"],
      github: "https://github.com/royswas389",
      demo: "https://github.com/royswas389"
    }
  ],

  contact: {
    heading: "GOT AN INTERESTING PROBLEM?",
    subheading: "Let's build something worth talking about.",
    openTo: [
      "Software Engineer / Developer roles",
      "Full-Stack & Frontend builds",
      "AI & Tooling experiments",
      "Challenging technical collaborations"
    ]
  },

  footer: {
    closing: "BUILT WITH CURIOSITY. POWERED BY TOO MANY TABS.",
    copyright: "© 2026 Swastik Roy",
    tagline: "BUILD → BREAK → LEARN → SHIP → REPEAT"
  }
} as const;

