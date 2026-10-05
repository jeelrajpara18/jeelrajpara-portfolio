import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Jeel Rajpara',
  description:
    'Learn about Jeel Rajpara - Frontend Developer & Digital Marketing practitioner with 2+ years of experience in React, Next.js, and modern web architectures.',
  keywords: [
    'About Jeel Rajpara',
    'Frontend Developer Background',
    'Web Developer Experience',
    'Silver Oak University',
    'Software Developer India',
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
