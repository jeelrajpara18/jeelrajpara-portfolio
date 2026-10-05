import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Hire For Frontend & Digital Marketing Projects',
  description:
    'Get in touch with Jeel Rajpara for freelance frontend development, web design, or digital marketing opportunities. Start a project conversation today.',
  keywords: [
    'Contact Jeel Rajpara',
    'Hire Frontend Developer',
    'Hire Digital Marketer',
    'Freelance Project Inquiry',
    'Freelance Web Developer Contact',
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
