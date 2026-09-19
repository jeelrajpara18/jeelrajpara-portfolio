'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <header className="w-full mx-auto px-10 py-6 flex items-center justify-between relative z-50">
      {/* Brand Logo / Name */}
      <Link href="/home" className="flex items-center space-x-2 group z-10">
        <span className="text-4xl font-black text-[#00e59b] tracking-tight group-hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(0,229,155,0.3)]">
          {"</>"}
        </span>
      </Link>

      {/* Floating Centered Pill Navbar */}
      <nav className="absolute left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#16161a]/90 backdrop-blur-xl border border-zinc-200 dark:border-white/[0.1] px-2 py-1.5 rounded-full shadow-lg flex items-center space-x-1 z-10 transition-colors">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-1.5 rounded-full text-sm transition-all z-10 ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-zinc-900 dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-700/50 dark:border-white/10 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Empty Spacer to preserve flex alignment */}
      <div className="w-12 h-6 hidden sm:block pointer-events-none" />
    </header>
  );
}
