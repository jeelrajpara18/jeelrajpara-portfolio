import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jeelrajpara-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeel Rajpara | Frontend Developer & Digital Marketing Freelancer",
    template: "%s | Jeel Rajpara",
  },
  description:
    "Portfolio of Jeel Rajpara - Frontend Developer & Freelance Digital Marketer. Crafting high-performance React/Next.js web applications, UI/UX experiences, and data-driven SEO & growth strategies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "JavaScript Developer",
    "UI/UX Developer",
    "Web Application Developer",
    "Responsive Web Design",
    "Tailwind CSS Specialist",
    "Frontend Architecture",
    "Web Performance Optimization",
    "Digital Marketing Specialist",
    "SEO Expert",
    "Search Engine Optimization",
    "Content Strategy",
    "Social Media Marketing",
    "Google Analytics",
    "Google Ads Specialist",
    "Conversion Rate Optimization",
    "Digital Growth Consultant",
    "Freelance Frontend Developer",
    "Freelance Digital Marketer",
    "Hire React Developer",
    "Hire Next.js Developer",
    "Freelance Web Developer India",
    "Remote Frontend Developer",
    "Jeel Rajpara",
    "Jeel Rajpara Portfolio",
  ],
  authors: [{ name: "Jeel Rajpara", url: siteUrl }],
  creator: "Jeel Rajpara",
  publisher: "Jeel Rajpara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Jeel Rajpara | Frontend Developer & Digital Marketing Specialist",
    description:
      "Crafting high-performance Next.js web applications and result-oriented digital marketing strategies. Available for freelance projects worldwide.",
    siteName: "Jeel Rajpara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeel Rajpara | Frontend Developer & Digital Marketing Freelancer",
    description:
      "Crafting fast web applications and result-driven digital marketing campaigns. Available for freelance opportunities.",
    creator: "@jeelrajpara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Jeel Rajpara",
        url: siteUrl,
        jobTitle: "Frontend Developer & Digital Marketing Specialist",
        description:
          "Frontend Developer and Freelance Digital Marketing Specialist specializing in React.js, Next.js, TypeScript, SEO, and Performance Marketing.",
        sameAs: [
          "https://github.com/jeelrajpara18",
          "https://www.linkedin.com/in/jeel-rajpara-/",
          "https://www.instagram.com/abitmoreofjeell_/",
        ],
        knowsAbout: [
          "Frontend Development",
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Performance Marketing",
          "Web Analytics",
          "Freelancing",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "India",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Jeel Rajpara - Freelance Web Development & Digital Marketing",
        url: siteUrl,
        priceRange: "$$",
        image: `${siteUrl}/about-image.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressCountry: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Offered",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Frontend Web Development (React / Next.js)",
                description:
                  "Custom, high-speed, and responsive web application development with modern technologies.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Marketing & SEO Services",
                description:
                  "Search engine optimization, content strategy, social media management, and paid advertising.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f4f4f3] dark:bg-[#0A0A0C] text-zinc-900 dark:text-[#f4f4f5] antialiased min-h-screen pb-16 transition-colors duration-300 overflow-x-hidden relative">
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 dark:bg-blue-500/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/5 dark:bg-emerald-500/5 blur-[100px]" />
        </div>
        <CustomCursor />
        <ToastProvider>
          <HeaderNav />
          <main className="max-w-7xl mx-auto px-2 sm:px-4 pt-2 relative z-0">
            {children}
          </main>
        </ToastProvider>
      </body>
    </html>
  );
}
