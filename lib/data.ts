import { Project, Experience, TechGroup, Principle } from './types';

export const personalInfo = {
  name: "Jeel Rajpara",
  title: "Frontend Developer",
  tagline: "Crafting fast, accessible, and delightful digital web experiences.",
  bio: "Frontend Developer with 2+ years of experience building modern web applications. Focused on React, Next.js, and TypeScript, with a deep interest in frontend architecture, performance optimization, and refined micro-interactions.",
  location: "India",
  status: "Available for new opportunities",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "jeelrajpara@gmail.com",
    twitter: "https://twitter.com"
  }
};

export const typewriterRoles = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI Engineer & Design Enthusiast",
  "TypeScript Advocate"
];

export const projects: Project[] = [
  {
    title: "AI Interview Mocker",
    description: "An AI-powered full-stack mock interview platform. Generates real-time custom questions based on job roles, records speech responses, and delivers instant audio feedback with performance metrics.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "Clerk"],
    github: "https://github.com",
    live: "https://example.com",
    highlight: "Featured Project"
  },
  {
    title: "Realtime Chat Application",
    description: "High-performance instant messaging app supporting 1-on-1 and group channels, live online presence status, rich media sharing, and instant unread notification counts.",
    tech: ["React.js", "Node.js", "Express", "Socket.io", "MongoDB", "Zustand"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Interactive Quiz Platform",
    description: "Dynamic quiz platform with timed test sessions, real-time leaderboard statistics, subject categories, and detailed score breakdown charts upon completion.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST API"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Shiv Infotech",
    period: "2024 - Present",
    type: "Full-time",
    highlights: [
      "Architected and deployed responsive client dashboards in React and Next.js, improving initial page load time by 35%.",
      "Collaborated closely with UI/UX designers to build custom reusable component libraries with Tailwind CSS.",
      "Integrated complex RESTful endpoints and optimized state management using Redux Toolkit and Zustand."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"]
  },
  {
    role: "Junior Frontend Engineer",
    company: "FutureStack Solutions",
    period: "2023 - 2024",
    type: "Full-time",
    highlights: [
      "Built interactive user interfaces and forms with robust client-side validation using React and TypeScript.",
      "Implemented smooth micro-animations using Framer Motion and GSAP for enhanced interactive user engagement.",
      "Participated in active code reviews, standardizing git workflows and modular component organization."
    ],
    tech: ["React.js", "JavaScript", "Framer Motion", "Bootstrap", "REST APIs"]
  },
  {
    role: "Frontend Intern",
    company: "Saeculum Solutions",
    period: "2022 - 2023",
    type: "Internship",
    highlights: [
      "Developed responsive pixel-perfect web pages from Figma mocks using HTML5, CSS3, and JavaScript.",
      "Fixed UI cross-browser compatibility issues and improved dynamic mobile layouts across various devices."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
  }
];

export const techStack: TechGroup[] = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Styling & Animation",
    items: ["Tailwind CSS", "Bootstrap", "Framer Motion", "GSAP", "CSS Modules"]
  },
  {
    category: "State & Data",
    items: ["Redux Toolkit", "Zustand", "React Router", "REST APIs", "Socket.io"]
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "Clerk"]
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "Vercel", "npm / pnpm", "VS Code"]
  }
];

export const principles: Principle[] = [
  {
    title: "Performance First",
    description: "Every kilobyte matters. I build applications optimized for speed, minimal bundle sizes, and instantaneous interaction response times."
  },
  {
    title: "Pixel Precision",
    description: "I bridge design and code seamlessly, taking pride in typography hierarchy, spacing discipline, and smooth liquid transitions."
  },
  {
    title: "Clean Architecture",
    description: "Code is read more often than it is written. I maintain modular, well-typed, and scalable codebase patterns."
  }
];
