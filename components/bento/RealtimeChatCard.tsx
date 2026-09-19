'use client';

import { MessageSquare, Send, UserCheck, ShieldCheck, Zap } from 'lucide-react';

export function RealtimeChatCard() {
  return (
    <div
      className="relative h-full w-full min-h-[500px] bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 rounded-[2.2rem] overflow-hidden p-6 flex flex-col justify-between select-none border border-emerald-400/30 shadow-xl"
    >
      {/* Decorative Gradient Glow Orbs */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-teal-300/30 blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-emerald-300/20 blur-xl pointer-events-none" />

      {/* Tilted Chat App UI Preview */}
      <div className="relative z-10 w-[115%] -right-4 top-2 transform rotate-[-8deg] bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-2xl border border-white/70 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 space-y-3.5">
        {/* Chat App Header */}
        <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                JS
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Dev Workspace</h3>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <p className="text-[9px] text-zinc-400 flex items-center gap-1">
                <UserCheck className="w-2.5 h-2.5 text-emerald-500" /> 12 online • Socket.io
              </p>
            </div>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold">
            Live Chat
          </span>
        </div>

        {/* Chat Messages */}
        <div className="space-y-2.5 pt-1">
          {/* Incoming Message */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              AK
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
              <p className="text-[10px] text-zinc-700 dark:text-zinc-300 leading-snug">
                Did you push the WebSocket event handler updates?
              </p>
              <span className="text-[8px] text-zinc-400 mt-1 block text-right">10:42 AM</span>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex items-start justify-end space-x-2">
            <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-none px-3 py-2 max-w-[80%] shadow-md">
              <p className="text-[10px] leading-snug">
                Yes! Realtime latency dropped below 15ms ⚡
              </p>
              <span className="text-[8px] text-emerald-200 mt-1 block text-right">10:43 AM • Read</span>
            </div>
          </div>

          {/* Incoming System Alert */}
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 rounded-xl p-2 flex items-center space-x-2 text-[9px] text-emerald-700 dark:text-emerald-300">
            <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Zustand store synchronized across channels</span>
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 rounded-xl px-3 py-2 text-xs flex items-center justify-between text-zinc-400">
          <span className="text-[10px]">Type a message...</span>
          <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
            <Send className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
