'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeToggleCard() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    const timer = setTimeout(() => {
      setTheme(isDark ? 'dark' : 'light');
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative flex h-full w-full select-none flex-col items-center justify-between p-6">
      {/* Sun / Moon Graphic */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div
                key="sun"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="relative flex h-28 w-28 items-center justify-center"
              >
                {/* Sun Glow */}
                <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-amber-400/20 blur-xl" />

                {/* Sun Body */}
                <div className="h-full w-full rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-300 shadow-[0_10px_40px_rgba(245,158,11,0.45)]" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="relative flex h-28 w-28 items-center justify-center"
              >
                {/* Moon Glow */}
                <div className="pointer-events-none absolute h-32 w-32 rounded-full bg-indigo-500/30 blur-xl" />

                {/* SVG Crescent Moon */}
                <svg className="h-full w-full relative z-10" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="moonGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a5b4fc" />
                      <stop offset="50%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  {/* Clean SVG Crescent Path */}
                  <path
                    d="M 50 5 A 45 45 0 1 0 95 50 A 35 35 0 1 1 50 5 Z"
                    fill="url(#moonGlowGrad)"
                  />
                </svg>

                {/* Subtle Stars */}
                <span className="absolute -right-3 top-2 text-xs text-indigo-300">✦</span>
                <span className="absolute -left-2 bottom-3 text-[10px] text-purple-300">✦</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Light / Dark Toggle Switch */}
      <div className="relative flex w-full max-w-[170px] items-center rounded-full bg-zinc-200/70 p-1 shadow-inner transition-colors dark:bg-zinc-800/80">
        {/* Sliding Active Tab */}
        <motion.div
          animate={{
            x: theme === 'dark' ? 78 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 450,
            damping: 32,
          }}
          className="absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full border border-zinc-200/50 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-900"
        />

        {/* Light Button */}
        <button
          type="button"
          onClick={() => handleThemeChange('light')}
          className={`relative z-10 flex-1 rounded-full py-1.5 text-xs font-bold transition-colors ${
            theme === 'light'
              ? 'text-zinc-900'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
        >
          Light
        </button>

        {/* Dark Button */}
        <button
          type="button"
          onClick={() => handleThemeChange('dark')}
          className={`relative z-10 flex-1 rounded-full py-1.5 text-xs font-bold transition-colors ${
            theme === 'dark'
              ? 'text-white'
              : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}