'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const springConfig = { damping: 38, stiffness: 600, mass: 0.15 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setMounted(true);
    const checkTheme = () => {
      const isDarkMode =
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDark(isDarkMode);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          window.getComputedStyle(target).cursor === 'pointer'
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none origin-top-left"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicked ? 0.88 : isHovered ? 1.18 : 1,
          rotate: isClicked ? 6 : isHovered ? -8 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 24,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            isDark
              ? 'drop-shadow-[0_4px_12px_rgba(56,189,248,0.45)]'
              : 'drop-shadow-[0_4px_10px_rgba(37,99,235,0.35)]'
          }
          style={{ transform: 'translate(-2px, -2px)' }}
        >
          <defs>
            <linearGradient id="cursorGradientTheme" x1="0%" y1="0%" x2="100%" y2="100%">
              {isDark ? (
                <>
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#818cf8" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </>
              )}
            </linearGradient>
          </defs>
          <path
            d="M6.8 5.6C5.1 4.2 2.5 5.5 2.6 7.7L5.5 39.2C5.7 41.3 8.3 42.2 9.8 40.7L18.6 31.8C19.2 31.2 20.0 30.8 20.8 30.7L33.3 28.7C35.4 28.4 36.3 25.8 34.8 24.3L6.8 5.6Z"
            fill="url(#cursorGradientTheme)"
            stroke={isDark ? '#0A0A0C' : '#ffffff'}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        {isHovered && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeOut' }}
            className={`absolute top-1 left-1 w-6 h-6 rounded-full pointer-events-none -z-10 ${
              isDark ? 'bg-cyan-400/30' : 'bg-blue-600/25'
            }`}
          />
        )}
      </motion.div>
    </div>
  );
}
