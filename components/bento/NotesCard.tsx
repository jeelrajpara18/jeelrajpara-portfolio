'use client';

import { ArrowUpRight, Code, Terminal, Mail, Mic, Calendar, Globe } from 'lucide-react';
import Link from 'next/link';

export function NotesCard() {
  return (
    <div className="relative h-full w-full bg-[#f9f9fb] dark:bg-[#121217] rounded-[2.2rem] p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-zinc-200/80 dark:border-zinc-800 select-none">
      {/* Background Orbit Lines */}
      <svg className="absolute inset-0 w-full h-full stroke-zinc-200 dark:stroke-zinc-800 fill-none opacity-60 pointer-events-none" viewBox="0 0 500 250">
        <path d="M 50 200 A 200 120 0 0 1 450 180" strokeDasharray="4 4" strokeWidth="1.5" />
      </svg>

      {/* Header & Title */}
      <div className="relative z-10 space-y-1 max-w-sm">
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          Curated thoughts, experiments & discoveries.
        </p>
        <h3 className="text-2xl sm:text-3xl font-serif text-zinc-900 dark:text-white tracking-tight leading-snug">
          Notes & explorations
        </h3>
      </div>

      {/* Floating Orbital Tech Badges */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-36 pointer-events-none hidden sm:block">
        <div className="absolute top-2 left-8 w-10 h-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-md border border-zinc-200/60 dark:border-zinc-700 flex items-center justify-center text-indigo-500">
          <Code className="w-5 h-5" />
        </div>
        <div className="absolute top-12 left-0 w-9 h-9 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 shadow-sm border border-emerald-200/50 flex items-center justify-center text-emerald-600">
          <Terminal className="w-4 h-4" />
        </div>
        <div className="absolute bottom-2 left-6 w-11 h-11 rounded-2xl bg-white dark:bg-zinc-800 shadow-md border border-zinc-200/60 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
          <Mail className="w-5 h-5" />
        </div>
        <div className="absolute top-16 left-24 w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 shadow-md border border-cyan-200/60 flex items-center justify-center text-cyan-600">
          <Mic className="w-5 h-5" />
        </div>
        <div className="absolute top-4 right-6 w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 shadow-md border border-amber-200/60 flex items-center justify-center text-amber-600">
          <Globe className="w-5 h-5" />
        </div>
        <div className="absolute bottom-4 right-10 w-9 h-9 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200/60 flex items-center justify-center text-zinc-500">
          <Calendar className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Left Circular Arrow Link Button */}
      <div className="relative z-10 pt-4 flex justify-start">
        <Link
          href="/blog"
          className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:scale-110 transition-transform"
          aria-label="View blog notes"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
