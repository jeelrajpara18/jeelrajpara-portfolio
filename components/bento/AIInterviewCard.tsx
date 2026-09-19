'use client';

import { ArrowUpRight, Sparkles, Mic, Bot, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function AIInterviewCard() {
  return (
    <Link
      href="/projects"
      className="group relative h-full w-full min-h-[500px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2.2rem] overflow-hidden p-6 flex flex-col justify-between select-none block border border-indigo-400/30"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-pink-400/40 blur-xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-indigo-300/30 blur-xl pointer-events-none" />

      {/* Tilted App UI Mockup Card Preview */}
      <div className="relative z-10 w-[115%] -right-4 top-2 transform rotate-[-8deg] group-hover:rotate-[-5deg] group-hover:scale-102 transition-all duration-300 bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-2xl border border-white/60 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 space-y-4">
        {/* App Header Bar */}
        <div className="flex justify-between items-start border-b border-zinc-100 dark:border-zinc-800 pb-3">
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-black tracking-widest text-indigo-600 dark:text-indigo-400 ml-1 uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI Interviewer
              </h3>
            </div>
            <p className="text-[9px] text-zinc-400 mt-0.5">Realtime Speech & Feedback Platform</p>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 font-bold">
            Gemini AI
          </span>
        </div>

        {/* Live Question Card */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-3 rounded-2xl border border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <Bot className="w-3 h-3" /> Question 2 of 5
            </span>
            <span className="text-[8px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-semibold">
              Recording Live
            </span>
          </div>
          <p className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
            Explain how React handles Virtual DOM diffing during state updates?
          </p>
        </div>

        {/* Voice Input Waveform Mock */}
        <div className="bg-zinc-900 dark:bg-zinc-950 text-white rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center animate-pulse">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold leading-none">Speech Recognition</p>
              <p className="text-[8px] text-zinc-400 mt-0.5">Capturing audio stream...</p>
            </div>
          </div>
          <div className="flex items-center space-x-0.5">
            <span className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce" />
            <span className="w-1 h-5 bg-purple-400 rounded-full animate-bounce delay-75" />
            <span className="w-1 h-2 bg-pink-400 rounded-full animate-bounce delay-150" />
            <span className="w-1 h-4 bg-indigo-400 rounded-full animate-bounce delay-100" />
          </div>
        </div>

        {/* Instant AI Evaluation Metrics */}
        <div className="space-y-1.5 pt-1 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex justify-between items-center text-[9px] text-zinc-500 font-mono">
            <span>AI ANALYSIS</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Score: 92/100
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="text-[8px] px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
              Technical Clarity: High
            </span>
            <span className="text-[8px] px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
              Pacing: Ideal
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Left Corner Circular Arrow Button */}
      <div className="relative z-20 pt-4 flex items-end justify-start">
        <div
          aria-label="View AI Interview Mocker Project"
          className="w-10 h-10 rounded-full bg-white border border-white/80 shadow-lg flex items-center justify-center text-zinc-800 group-hover:scale-110 transition-transform"
        >
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
