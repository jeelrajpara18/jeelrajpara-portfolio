'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function SpotlightGlow() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for fluid mouse following
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-300"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Light mode subtle glow */}
      <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl dark:hidden" />
      {/* Dark mode vibrant ambient spotlight */}
      <div className="hidden dark:block w-[450px] h-[450px] rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/10 to-transparent blur-3xl" />
    </motion.div>
  );
}
