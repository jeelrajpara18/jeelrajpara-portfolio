'use client';

import { ArrowUpRight, Mail, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function ContactCard() {
  return (
    <div className="relative h-full w-full bg-gradient-to-r from-zinc-900 via-zinc-900 to-[#18181c] text-white rounded-[2.2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden border border-zinc-800 shadow-2xl select-none group">
      {/* Background Subtle Gradient & Mesh Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Text & Availability Status */}
      <div className="relative z-10 space-y-2 max-w-lg mb-6 sm:mb-0">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Opportunities</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Let&apos;s build something <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">extraordinary.</span>
        </h3>
        <p className="text-sm text-zinc-400 font-medium">
          Have a project in mind or want to collaborate? Feel free to reach out anytime.
        </p>
      </div>

      {/* Right Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
        <a
          href="mailto:jeelrajpara@gmail.com"
          className="px-6 py-3.5 rounded-2xl bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all hover:scale-105"
        >
          <Mail className="w-4 h-4 text-indigo-600" />
          <span>jeelrajpara@gmail.com</span>
        </a>

        <Link
          href="/contact"
          className="px-5 py-3.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all hover:scale-105"
        >
          <span>Contact Page</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>
      </div>
    </div>
  );
}
