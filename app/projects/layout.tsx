import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Work Portfolio',
  description:
    'Showcase of frontend development projects, web applications, AI tools, and full-stack solutions built with React, Next.js, TypeScript, and modern web technologies.',
  keywords: [
    'Frontend Projects',
    'React Portfolio',
    'Next.js Case Studies',
    'AI Interview Mocker',
    'Realtime Chat App',
    'Web Development Portfolio',
  ],
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
