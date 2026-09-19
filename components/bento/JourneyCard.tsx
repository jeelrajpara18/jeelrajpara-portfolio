'use client';

import { ArrowUpRight, User, Briefcase, Award, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function JourneyCard() {
  return (
    <Link
      href="/about"
      className="group relative h-full w-full min-h-[500px] bg-gradient-to-br from-[#ff0f7b] to-[#f89b29] rounded-[2.2rem] overflow-hidden p-6 sm:p-7 flex flex-col justify-between select-none block border border-rose-400/30 shadow-xl"
    >
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-rose-300/30 blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-300/20 blur-xl pointer-events-none" />
      <div className="relative z-10 space-y-1.5">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          Professional Journey
        </h3>
        <p className="text-xs text-rose-100/90 font-medium">
          2+ years building modern, performant web applications.
        </p>
      </div>
      <div className="relative z-10 my-4 space-y-3 text-white">
        <div className="flex items-start space-x-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight text-white">Software Engineer</h4>
            <p className="text-[11px] text-white/90 font-medium mt-0.5">Shiv Infotech • Oct 2025 - Present</p>
            <p className="text-[10px] text-white/80 mt-1 leading-relaxed line-clamp-2">
              Building scalable React & Next.js apps, integrating APIs & optimizing performance.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 flex items-start space-x-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight text-white">Software Trainee</h4>
            <p className="text-[11px] text-white/90 font-medium mt-0.5">Future Stack Solutions • Aug 2023 - Apr 2024</p>
            <p className="text-[10px] text-white/80 mt-1 leading-relaxed line-clamp-2">
              Developed SAMAJ using React with RBAC & complex data structures.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 flex items-start space-x-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight text-white">Software Trainee</h4>
            <p className="text-[11px] text-white/90 font-medium mt-0.5">Saeculum Solutions • Apr 2023 - Jul 2023</p>
            <p className="text-[10px] text-white/80 mt-1 leading-relaxed line-clamp-2">
              Built responsive UIs with Bootstrap, Tailwind CSS & JavaScript (ES6+).
            </p>
          </div>
        </div>
      </div>
      <div className="pt-2 flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center text-white hover:scale-110 hover:bg-white/20 transition-all"
            aria-label="View Projects"
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
    </Link>
  );
}
