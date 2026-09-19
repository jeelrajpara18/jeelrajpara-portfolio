'use client';

import { ArrowUpRight, Play, SkipForward, Volume2 } from 'lucide-react';

export function AudiusPlayerCard() {
  return (
    <div className="relative h-full w-full min-h-[500px] bg-[#54d3b0] rounded-[2.2rem] overflow-hidden p-6 flex flex-col justify-between select-none">
      {/* Background Decorative Pink & Teal Blobs */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#f49bb8] opacity-80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#7ae3c7] opacity-60 pointer-events-none" />

      {/* Tilted App UI Card Preview */}
      <div className="relative z-10 w-[115%] -right-4 top-2 transform rotate-[-8deg] bg-white rounded-3xl p-5 shadow-2xl border border-white/60 text-zinc-800 space-y-4">
        {/* App Header Bar */}
        <div className="flex justify-between items-start border-b border-zinc-100 pb-3">
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-black tracking-widest text-purple-700 ml-1 uppercase">Audius Player</h3>
            </div>
            <p className="text-[9px] text-zinc-400 mt-0.5">Discover music from Audius network</p>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            v1.2
          </span>
        </div>

        {/* Top Tracks Card Grid */}
        <div>
          <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">Top Tracks</span>
          <div className="grid grid-cols-2 gap-2 mt-1.5">
            <div className="h-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-2 text-white flex flex-col justify-end shadow-sm">
              <span className="text-[10px] font-extrabold uppercase leading-tight">Get Back</span>
              <span className="text-[8px] opacity-75">Electronic</span>
            </div>
            <div className="h-20 rounded-xl bg-zinc-800 p-2 text-white flex flex-col justify-end shadow-sm">
              <span className="text-[10px] font-extrabold uppercase leading-tight">Audius Console</span>
              <span className="text-[8px] opacity-75">Live Stream</span>
            </div>
          </div>
        </div>

        {/* Search Input Mock */}
        <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl px-3 py-2 text-xs text-zinc-400 flex items-center justify-between">
          <span>Search by artist or track...</span>
          <span className="text-[10px] font-semibold text-zinc-500">SEARCH</span>
        </div>

        {/* Playback Controls & Status */}
        <div className="space-y-2 pt-1 border-t border-zinc-100">
          <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
            <span>STATUS</span>
            <span className="font-bold text-zinc-700">PLAYBACK: STOPPED</span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              className="flex-1 bg-purple-50 text-purple-700 py-1.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-1 hover:bg-purple-100 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>PLAY</span>
            </button>
            <button
              type="button"
              className="p-2 rounded-xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center space-x-1 text-zinc-400 px-1">
              <Volume2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Corner Circular Arrow Button */}
      <div className="relative z-20 pt-4 flex items-end justify-start">
        <button
          type="button"
          aria-label="Open Audius Player"
          className="w-10 h-10 rounded-full bg-white border border-white/80 shadow-lg flex items-center justify-center text-zinc-800 hover:scale-110 transition-transform"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
