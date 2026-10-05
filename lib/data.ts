import { Project, Experience, TechGroup, Principle } from './types';

export const personalInfo = {
  name: "Jeel Rajpara",
  title: "Frontend Developer",
  tagline: "Crafting fast, accessible, and delightful digital web experiences.",
  bio: "Frontend Developer with 2+ years of experience building modern web applications. Focused on React, Next.js, and TypeScript, with a deep interest in frontend architecture, performance optimization, and refined micro-interactions.",
  location: "Ahmedabad, India",
  status: "Available for new opportunities",
  socials: {
    github: "https://github.com/jeelrajpara18",
    linkedin: "https://www.linkedin.com/in/jeel-rajpara-/",
    instagram: "https://www.instagram.com/abitmoreofjeell_/",
    email: "jeelrajpara18@gmail.com",
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
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/jeelrajpara18/Ai-mocker",
    live: "https://ai-mocker-sage.vercel.app/",
    highlight: "Featured Project",
    image: "/AiInterviewMocker.png",
    date: "August - 2024",
    type: "Personal"
  },
  {
    title: "Realtime Chat Application",
    description: "High-performance instant messaging app supporting 1-on-1 and group channels, live online presence status, rich media sharing, and instant unread notification counts.",
    tech: ["React.js", "Node.js", "Express", "Socket.io"],
    github: "https://github.com/jeelrajpara18/chat-app",
    live: "https://example.com",
    date: "December - 2023",
    type: "Personal"
  },
  {
    title: "Interactive Quiz Platform",
    description: "Dynamic quiz platform with timed test sessions, real-time leaderboard statistics, subject categories, and detailed score breakdown charts upon completion.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    date: "March - 2023",
    type: "Personal"
  }
];

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Shiv Infotech",
    logo: "/shiv-logo.png",
    period: "Oct 2025 - Sept 2026",
    type: "Full-time",
    highlights: [
      "Learnt React, React Native, and Next.js and implemented them in production environments.",
      "Contributed to multiple multi-language projects, ensuring seamless localization and internationalization.",
      "Collaborated closely with cross-functional teams to deliver high-quality, responsive applications."
    ],
    tech: ["React.js", "React Native", "Next.js"]
  },
  {
    role: "Frontend Developer",
    company: "Future Stack Solutions",
    logo: "/fss.png",
    period: "Aug 2023 - July 2024",
    type: "Full-time",
    highlights: [
      "Mastered React and built complex interactive user interfaces.",
      "Developed 'Samaj', a robust communication platform connecting people within a community.",
      "Optimized component rendering and managed state for seamless real-time interactions."
    ],
    tech: ["React.js", "JavaScript"]
  },
  {
    role: "Intern",
    company: "Saeculum Solutions",
    logo: "/saeculum-logo.png",
    period: "Apr 2023 - July 2023",
    type: "Internship",
    highlights: [
      "Learned the fundamentals of web development including HTML, CSS, and JavaScript.",
      "Built static responsive web pages and converted design mockups into functional UI.",
      "Gained hands-on experience with version control and collaborative development practices."
    ],
    tech: ["HTML", "CSS", "JavaScript"]
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
