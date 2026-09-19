'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, User, FolderKanban, Briefcase, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const navItems = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden sticky top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#1F1F1F]">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/home" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm">
            JR
          </div>
          <span className="text-[#F0EDE8] font-semibold text-sm">{personalInfo.name}</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#888888] hover:text-[#F0EDE8] hover:bg-[#161616] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Menu */}
      {isOpen && (
        <div className="border-t border-[#1F1F1F] bg-[#111111] px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
        </div>
      )}
    </div>
  );
}
