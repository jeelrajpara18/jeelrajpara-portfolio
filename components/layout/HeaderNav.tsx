'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function HeaderNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-6 md:px-10 py-6 flex items-center justify-between relative z-50">
      {/* Brand Logo / Name */}
      <Link href="/home" className="flex items-center space-x-2 group z-50">
        <span className="text-4xl font-black text-[#00e59b] tracking-tight group-hover:scale-105 transition-transform drop-shadow-[0_0_12px_rgba(0,229,155,0.3)]">
          {"</>"}
        </span>
      </Link>

      {/* Desktop Floating Centered Pill Navbar */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#16161a]/90 backdrop-blur-xl border border-zinc-200 dark:border-white/[0.1] px-2 py-1.5 rounded-full shadow-lg items-center space-x-1 z-10 transition-colors">
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
      <button 
        className="md:hidden z-50 p-2.5 text-zinc-900 dark:text-white bg-white/80 dark:bg-[#16161a]/80 backdrop-blur-md border border-zinc-200 dark:border-white/[0.1] rounded-full shadow-sm focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white/95 dark:bg-[#16161a]/95 backdrop-blur-xl border border-zinc-200 dark:border-white/[0.1] rounded-3xl shadow-2xl p-4 flex flex-col space-y-2 z-40 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === '/home' && pathname === '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-3.5 rounded-2xl text-base font-semibold transition-colors ${
                    isActive 
                      ? 'bg-zinc-900 text-white dark:bg-zinc-800' 
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-12 h-6 hidden md:block pointer-events-none" />
    </header>
  );
}
