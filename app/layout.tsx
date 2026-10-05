import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { SpotlightGlow } from "@/components/ui/SpotlightGlow";

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
    <html lang="en" data-theme="light" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#f4f4f3] dark:bg-[#0A0A0C] text-zinc-900 dark:text-[#f4f4f5] antialiased min-h-screen pb-16 transition-colors duration-300 overflow-x-hidden relative">
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 dark:bg-blue-500/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/5 dark:bg-emerald-500/5 blur-[100px]" />
        </div>
        <SpotlightGlow />
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
