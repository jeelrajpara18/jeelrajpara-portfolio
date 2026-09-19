'use client';

import { ArrowUpRight, FolderKanban, Plus, Sparkles, Video, Bot } from 'lucide-react';
import Link from 'next/link';
import AiinterviewMocker from '../../public/AiInterviewMocker.png';
import Image from 'next/image';

export function ProjectSpotlightCard() {
  return (
    <Link
      href="/projects"
      className="group relative h-full w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 rounded-[2.2rem] p-6 sm:p-7 flex flex-row items-center justify-between overflow-hidden select-none border border-indigo-400/30 text-white block shadow-xl"
    >
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-purple-400/30 blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-indigo-300/20 blur-xl pointer-events-none" />
      <div className="relative z-10 space-y-2 max-w-[50%]">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          AI Interview Mocker
        </h3>
        <p className="text-xs text-indigo-100/90 font-medium hidden sm:block leading-relaxed">
          Create mock interviews, record real-time voice answers & get instant AI score feedback.
        </p>
        <div className="pt-2 flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center text-white hover:scale-110 hover:bg-white/20 transition-all"
            aria-label="View Projects"
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-[48%] sm:w-[45%] transform rotate-[-6deg] bg-white dark:bg-zinc-900 rounded-2xl p-2 shadow-2xl border border-white/80 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 pointer-events-none space-y-2">
        <Image src={AiinterviewMocker} alt="AI Interview Mocker" className='w-full h-full object-cover' />
      </div>
    </Link>
  );
}
