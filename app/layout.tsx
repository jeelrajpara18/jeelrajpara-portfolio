import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "@/components/layout/HeaderNav";

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

export const metadata: Metadata = {
  title: "Jeel Rajpara | Frontend Developer Portfolio",
  description: "Bento grid personal portfolio website of Jeel Rajpara - Frontend Developer specializing in React.js, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#f4f4f3] dark:bg-[#0A0A0C] text-zinc-900 dark:text-[#f4f4f5] antialiased min-h-screen pb-16 transition-colors duration-300">
        <HeaderNav />
        <main className="max-w-7xl mx-auto px-2 sm:px-4 pt-2">
          {children}
        </main>
      </body>
    </html>
  );
}
