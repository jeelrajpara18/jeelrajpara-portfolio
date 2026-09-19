'use client';

import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className = '' }: BentoCardProps) {
  return (
    <div
      className={`flex flex-col justify-between h-full bg-white dark:bg-[#0e0e11] text-zinc-900 dark:text-zinc-100 border border-zinc-200/70 dark:border-zinc-800/80 rounded-[2.2rem] shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 relative overflow-hidden select-none ${className}`}
    >
      {children}
    </div>
  );
}
