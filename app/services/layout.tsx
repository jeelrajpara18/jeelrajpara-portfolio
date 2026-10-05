import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development & Digital Marketing Services',
  description:
    'Explore freelance frontend development (React.js, Next.js) and digital marketing services (SEO, Social Media, Analytics) offered by Jeel Rajpara.',
  keywords: [
    'Frontend Development Services',
    'Digital Marketing Freelancer',
    'SEO Optimization Services',
    'Next.js Web Development',
    'Hire Freelance Developer',
    'Content Strategy',
    'Paid Ad Campaigns',
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
