'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Connect with me',
    href: 'https://linkedin.com',
    bg: 'from-[#0077b5] to-[#2b519a]',
    darkBg: 'dark:from-[#004e7c] dark:to-[#1a3566]',
    icon: (
      <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: 'Follow me',
    href: 'https://instagram.com',
    bg: 'from-[#f09433] via-[#e6683c] to-[#bc1888]',
    darkBg: 'dark:from-[#c4762a] dark:via-[#b34f2d] dark:to-[#8b1165]',
    icon: (
      <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function SocialConnectCard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-cycle every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIdx((prev) => (prev + 1) % socials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > activeIdx ? 1 : -1);
    setActiveIdx(idx);
  };

  const current = socials[activeIdx];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.85 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.85 }),
  };

  return (
    <motion.div
      key={current.id + '-bg'}
      animate={{ background: undefined }}
      className={`relative h-full w-full rounded-[2.2rem] overflow-hidden flex flex-col items-center justify-between p-6 text-white select-none bg-gradient-to-br ${current.bg} ${current.darkBg} transition-all duration-700`}
    >
      {/* Decorative blurred circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Animated Social Icon */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Icon circle */}
            <a
              href={current.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${current.label}`}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
            >
              {current.icon}
            </a>

            {/* Label */}
            <div className="text-center">
              <p className="text-base font-bold tracking-tight">{current.label}</p>
              <p className="text-xs text-white/70 mt-0.5">{current.handle}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5 z-10">
        {socials.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.label}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIdx === i ? 'w-5 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
