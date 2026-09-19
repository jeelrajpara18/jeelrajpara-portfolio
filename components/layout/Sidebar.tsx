'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderKanban, Briefcase, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const navItems = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-60 border-r border-[#1F1F1F] bg-[#111111] z-40 p-6">
      {/* Header Profile Section */}
      <div className="mb-8">
        <Link href="/home" className="block group">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-lg group-hover:scale-105 transition-transform">
              JR
            </div>
            <div>
              <h2 className="text-[#F0EDE8] font-semibold text-base leading-tight group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </h2>
              <p className="text-xs text-[#888888] mt-0.5">{personalInfo.title}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                  : 'text-[#888888] hover:text-[#F0EDE8] hover:bg-[#161616]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-[#888888]'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Socials */}
      <div className="pt-6 border-t border-[#1F1F1F] space-y-4">
        <div className="flex items-center space-x-3 text-[#888888]">
          {/* Inline GitHub SVG */}
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F0EDE8] transition-colors p-1.5 rounded-md hover:bg-[#161616]"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Inline LinkedIn SVG */}
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F0EDE8] transition-colors p-1.5 rounded-md hover:bg-[#161616]"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="hover:text-[#F0EDE8] transition-colors p-1.5 rounded-md hover:bg-[#161616]"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center space-x-2 text-xs text-[#555555]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
          <span className="pl-3">Available for work</span>
        </div>
      </div>
    </aside>
  );
}
