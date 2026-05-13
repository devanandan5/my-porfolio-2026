export const profile = {
  name: "Devanandan S",
  firstName: "Devanandan",
  pronouns: "He/Him",
  role: "MERN Stack Developer",
  tagline:
    "I build robust web and mobile products with React, Node.js, MongoDB and React Native.",
  location: "Bengaluru, Karnataka, India",
  status: "Open to opportunities",
  email: "metaflo.ai@gmail.com",
  linkedin: "https://www.linkedin.com/in/devanandan-s-059239215/",
  github: "https://github.com/",
  yearsOfExperience: 5,
  about: [
    "I'm Devanandan — a full-stack engineer with 5+ years of hands-on experience shipping production software across web, mobile and Web3.",
    "My day-to-day is the MERN stack: MongoDB, Express, React and Node.js. I also build cross-platform mobile apps with React Native and modern, fast web experiences with Next.js and TypeScript.",
    "I care about clean, maintainable code, performant APIs and interfaces that feel obvious to use. Right now I'm exploring the intersection of AI-assisted product workflows and Web3.",
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Private Company",
    role: "MERN Stack Developer",
    type: "Full-time · On-site",
    location: "Trivandrum, Kerala",
    start: "May 2024",
    end: "Present",
    duration: "2 yrs+",
    highlights: [
      "Lead end-to-end feature development across React, Node.js and MongoDB.",
      "Own API design, performance and code quality for a multi-product portfolio.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    company: "IVAR Solutions",
    role: "Back-end Developer",
    type: "Freelance · Remote",
    location: "Kerala, India",
    start: "Oct 2020",
    end: "Nov 2024",
    duration: "4 yrs 2 mos",
    highlights: [
      "Designed and shipped REST APIs powering client web and mobile apps.",
      "Engineered scalable Node.js services with focus on reliability and DX.",
    ],
    stack: ["Node.js", "Express", "REST APIs", "MongoDB", "JavaScript"],
  },
  {
    company: "FO Soft Solutions",
    role: "Full-stack Developer",
    type: "Full-time · Remote",
    location: "Bangalore",
    start: "Feb 2024",
    end: "May 2024",
    duration: "4 mos",
    highlights: [
      "Built full-stack features end-to-end across frontend and backend.",
      "Improved code health and developer experience across the codebase.",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "NEYYAR APP",
    role: "Backend & MERN Stack Developer",
    type: "Full-time",
    location: "Thiruvananthapuram, Kerala",
    start: "Nov 2021",
    end: "Mar 2024",
    duration: "2 yrs 5 mos",
    highlights: [
      "Built backend services and full-stack features in production.",
      "Shipped REST APIs and React UIs for a consumer app.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  year: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Metaflo — AI Form Builder",
    description:
      "AI-powered form builder that turns plain-English prompts into structured, multi-step forms with validation.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    year: "2024",
    highlight: true,
  },
  {
    title: "Finco",
    description:
      "Personal finance dashboard for tracking spend, budgets and recurring subscriptions in one place.",
    stack: ["TypeScript", "React", "Node.js", "MongoDB"],
    year: "2025",
    highlight: true,
  },
  {
    title: "Cura Healthcare",
    description:
      "Healthcare platform connecting patients with clinics — appointments, records and prescriptions.",
    stack: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    title: "Eduaccel",
    description:
      "Learning acceleration platform for admissions, courses and progress tracking.",
    stack: ["TypeScript", "Next.js", "React", "MongoDB"],
    year: "2024",
  },
  {
    title: "Briefly",
    description:
      "Reader app that summarizes long articles into 60-second briefs powered by LLMs.",
    stack: ["TypeScript", "React Native", "AI"],
    year: "2024",
  },
  {
    title: "Flint File Converter",
    description:
      "Privacy-first browser file converter — images, documents and audio, all without uploads.",
    stack: ["TypeScript", "React", "WASM"],
    year: "2024",
  },
  {
    title: "Unity Social",
    description:
      "Social media app with feeds, real-time messaging and rich media — built mobile-first.",
    stack: ["TypeScript", "React Native", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    title: "Statusly",
    description:
      "Lightweight status page system with incident timelines and uptime tracking.",
    stack: ["HTML", "JavaScript", "Node.js"],
    year: "2025",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "WebSockets"],
  },
  {
    label: "Database",
    items: ["MongoDB", "Mongoose", "SQL", "Redis"],
  },
  {
    label: "Mobile",
    items: ["React Native", "iOS & Android", "Push Notifications"],
  },
  {
    label: "Web3 & Tooling",
    items: ["Web3", "Smart Contracts", "Git", "CI/CD", "Vercel"],
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;
